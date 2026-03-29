import { useAuth } from "@/hooks/context/AuthContextHook";
import { useChannelMessage } from "@/hooks/context/useChannelMessage";
import { useVideoCallContext } from "@/hooks/context/useVideoCallContext";
import { useQueryClient } from "@tanstack/react-query";
import Peer from "peerjs";
import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { toast } from "sonner";

const SocketContext = createContext();

const socket = io(import.meta.env.VITE_DEVELOPMENT_SOCKET_URL);

export const SocketContextProvider = ({children})=>{

    const { setCallerVideoFeed,setPeers,setIncomingVC } = useVideoCallContext()
    const [currentChannel,setCurrentChannel] = useState();
    const [incomingCall,setIncomingCall] = useState();
    const { auth } = useAuth();
    const peerRef = useRef(null)
    const [stream,setStream] = useState();
    const { messageList,setMessageList } = useChannelMessage();
    const queryClient = useQueryClient();
    const streamRef = useRef(null);

    useEffect(()=>{
        const newPeer = new Peer(auth?.user?._id,{
            host : import.meta.env.PEER_JS_HOST,
            port : 9000,
            path : '/myapp'
        })
        peerRef.current = newPeer;

        newPeer.on("call", async (call) => {
            console.log("Receiving PeerJS call!");
            setIncomingCall(call);
            const activeStream = await fetchUserFeed();
            // Answer instantly using the stream from our Ref
            call.answer(activeStream);
            
            call.on("stream", (remoteStream) => {
                console.log("Got remote stream from caller!");
                setPeers(prev => ({
                    ...prev,
                    [call.peer]: { stream: remoteStream }
                }));
            });
        });

        return () => {
            newPeer.disconnect();
            newPeer.destroy();
        }
    },[auth?.user?._id])

    useEffect(()=>{
        const handleCallAccepted = async (data)=>{
            console.log("data at call accepted : ",data,peerRef.current,streamRef.current)
            const {userIdToVC} = data;
            if (!peerRef.current) {
                console.log("Peer not ready");
                return;
            }
            const activeStream = await fetchUserFeed()
            const call = peerRef.current.call(userIdToVC,activeStream)
            
            console.log("called using peerid")
            call.on("stream",(remoteStream)=>{
                setPeers(prev =>({
                    ...prev,
                    [call.peer] : {stream : remoteStream}
                }))
            })
        }
        socket.on('call-accepted',handleCallAccepted)

        return () => {
            socket.off('call-accepted', handleCallAccepted);
        };


    },[])
    

    // useEffect(()=>{
        
    //     const handleIncomingCall = (call)=>{
    //         console.log("accepting call");
    //         setIncomingCall(call);
    //         call.answer(streamRef.current);
    //         call.on("stream",(remoteStream)=>{
    //             setPeers(prev => ({
    //                 ...prev,
    //                 [call.peer]: { stream: remoteStream }
    //             }))
    //         })
    //     }
    //     peerRef.current.on("call",handleIncomingCall);
    //     return () => {
    //         peerRef.current.off("call", handleIncomingCall);
    //     }
    // },[peerRef?.current,streamRef?.current])

   
    
    const fetchUserFeed = async ()=>{
        if (streamRef.current) return streamRef.current;
        const mediaStream = await navigator.mediaDevices.getUserMedia({video : true,audio : true});
        setStream(mediaStream);
        streamRef.current = mediaStream;
        return mediaStream;
    }

    useEffect(()=>{
        socket.on("sentNotificationforincomingfriendrequest",(data)=>{
            toast.info("Recieved friend request")
        })
    })

    

    socket.on('message',(data)=>{
        //console.log("New message recieved : ",data);
        //console.log("message list before change : ",messageList);
        setMessageList([...messageList,data]);
        //console.log("message list after change : ",messageList);
        
        queryClient.invalidateQueries('fetchchannelmessages');
        
        //console.log(messageList)
    })

    
    
    
    socket.on('direct-message',(data)=>{
        console.log("new msg recieved at direct chat ",data);
        setMessageList([...messageList,data]);
        queryClient.invalidateQueries('directchatmessage')
    })
    socket.on("incomingVideoCall",()=>{
        console.log("incoming video call ");
        setIncomingVC(true);
            
    })
    async function acceptVideoCall({friendshipId,userIdToVC}){

        const activeStream = await fetchUserFeed();
        setCallerVideoFeed(true);  
        console.log("accept call triggered");
        socket.emit("accept-video-call",{
            friendshipId : friendshipId,
            userIdToVC : userIdToVC
        })
        
    }
    

    async function joinChannel(channelId){
        socket.emit('join-room',{channelId},(data)=>{
            console.log('Successfully joined the channel', data);
            setCurrentChannel(data?.data);
        });
    }

    async function joinDirectChatRoom(friendshipId){
        console.log("at direct chat room send event")
        socket.emit('join-dc-room',{friendshipId},(data)=>{
            console.log("successfully joinded the channel ",data);
        })
    }

    async function SendMessage({channelId,workspaceId,messageContent,senderId}){
        socket.emit('message',{
            body : messageContent,
            senderId,
            workspaceId,
            channelId
        });
    }

    async function sendDirectMessage({messageContent,senderId,friendshipId}){
        socket.emit('direct-message',{
            body : messageContent,
            senderId,
            friendshipId
        })
    }

    async function loginSocket({userId}){
        //console.log("user id at login socket : ",userId);
        socket.emit("login",{
            userId : userId
        })
    }

    async function sendNotificationToRecipient({requesterId,recipientId}){
        console.log("at send notification ");
        socket.emit("sendfriendrequest",{
            requesterId : requesterId,
            recipientId : recipientId
        })
    }

    async function ringVideoCall({friendshipId}){
        console.log("Initiating video call : ",friendshipId);
        await fetchUserFeed();
        setCallerVideoFeed(true);  
        socket.emit("ringVideoCall",{
            friendshipId : friendshipId
        });
        
    }

    return(
        <SocketContext.Provider 
            value={{
                currentChannel,
                joinChannel,
                joinDirectChatRoom,
                SendMessage,
                sendDirectMessage,
                socket,
                loginSocket,
                sendNotificationToRecipient,
                ringVideoCall,
                stream,
                acceptVideoCall
            }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext;