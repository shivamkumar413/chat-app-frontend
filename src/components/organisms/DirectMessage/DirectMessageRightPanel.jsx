import { Editor } from "@/components/atoms/Editor/Editor";
import { MessageButton } from "@/components/atoms/MessageButton/MessageButton";
import { DirectChatHeader } from "@/components/molecules/DirectMessage/DirectChatHeader";
import { VideoFeed } from "@/components/molecules/VideoFeed/VideoFeed";
import { useGetFriendDetailByFriendshipId } from "@/hooks/apis/friendship/useGetFriendDetailByFriendshipId";
import { useGetDirectChatMessages } from "@/hooks/apis/message/useGetDirectChatMessages";
import { useChannelMessage } from "@/hooks/context/useChannelMessage";
import { useMessageOptionsModal } from "@/hooks/context/useMessageOptionsModal";
import { useSocketHook } from "@/hooks/context/useSocketHook";
import { useVideoCallContext } from "@/hooks/context/useVideoCallContext";
import { useQueryClient } from "@tanstack/react-query";
import { Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export const DirectMessageRightPanel = ()=>{

    const { friendshipId } = useParams();
    const { joinDirectChatRoom,socket,stream,acceptVideoCall } = useSocketHook();
    const { incomingVC } = useVideoCallContext()
    const { peers } = useVideoCallContext();
    const queryClient = useQueryClient()
    const { callerVideoFeed } = useVideoCallContext()
    const { directChatMessages,directChatisSuccess,directChatispending } = useGetDirectChatMessages()
    const { friendDetail,isPendingFriendDetail } = useGetFriendDetailByFriendshipId()
    const { messageList,setMessageList } = useChannelMessage()
    const directMessageRef = useRef();
    console.log("peers at drc :",peers);
    // const [incomingVC,setIncomingVC] = useState(false);

    // socket.on("incomingVideoCall",()=>{
    //     console.log("incoming video call",socket.id);
    //     setIncomingVC(true);
    // })
    
    useEffect(()=>{
        if(!friendshipId) return;
        joinDirectChatRoom(friendshipId);
        directMessageRef?.current?.scrollTo(0,1000);
        queryClient.invalidateQueries('getfrienddetailbyfriendshipid')
    },[friendshipId])

    useEffect(()=>{
        if(directChatisSuccess){
            setMessageList(directChatMessages.reverse())
            directMessageRef.current?.scrollTo({
                top : 1000,
                behavior : "instant"
            });
        }
    },[directChatisSuccess,friendshipId,directChatMessages,messageList])

    async function handleAcceptVideoCall(){
        console.log("Accept call triggered ");
        let userIdToVC;
        (typeof friendDetail?.requester === "string") ? userIdToVC = friendDetail?.recipient?._id : userIdToVC = friendDetail?.requester?._id
        await acceptVideoCall(
            {
                friendshipId : friendshipId,
                userIdToVC : userIdToVC
            }
        );
    } 
    
    return(
        <div
            className="flex flex-col h-screen bg-gray-700"
        >
            <DirectChatHeader
                friendDetail={friendDetail}
            />
            {incomingVC && 
                <>
                <div className="w-full bg-gray-600 flex justify-end py-2 px-1">
                    <div></div>
                    <div className="flex gap-4">
            
                        <Phone
                            className="bg-red-500 size-6 p-1 rounded-lg"
                        />

                        <Phone
                            onClick={handleAcceptVideoCall}
                            className="bg-green-500 size-6 p-1 rounded-lg"
                        />
                    </div>
                </div>

                </>
            }

            {callerVideoFeed &&
                <VideoFeed stream={stream}/>
            }

            {Object.keys(peers).map((peerId)=>{
                return(
                    
                    <VideoFeed 
                        key={peerId} 
                        stream={peers[peerId].stream}
                    />
                    
                )
            })}

            
            <div
                className="flex-1 overflow-y-auto"
                ref={directMessageRef}
            >
                {messageList?.map((message)=>{
                    return(
                        <div
                            key={message?._id}
                            
                        >
                            <MessageButton message={message} />
                        </div>
                    )
                })}
            </div>

            <Editor />
        </div>
    )
}