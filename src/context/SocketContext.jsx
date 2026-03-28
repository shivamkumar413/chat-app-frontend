import { useChannelMessage } from "@/hooks/context/useChannelMessage";
import { useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { toast } from "sonner";

const SocketContext = createContext();

export const SocketContextProvider = ({children})=>{

    const [currentChannel,setCurrentChannel] = useState();
    const { messageList,setMessageList } = useChannelMessage();
    const queryClient = useQueryClient();
    
    useEffect(()=>{
        socket.on("sentNotificationforincomingfriendrequest",(data)=>{
            toast.info("Recieved friend request")
        })
    })

    const socket = io(import.meta.env.VITE_SOCKET_URL);

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

    return(
        <SocketContext.Provider 
            value={{currentChannel,joinChannel,joinDirectChatRoom,SendMessage,sendDirectMessage,socket,loginSocket,sendNotificationToRecipient}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext;