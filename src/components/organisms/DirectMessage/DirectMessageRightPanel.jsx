import { Editor } from "@/components/atoms/Editor/Editor";
import { MessageButton } from "@/components/atoms/MessageButton/MessageButton";
import { DirectChatHeader } from "@/components/molecules/DirectMessage/DirectChatHeader";
import { useGetFriendDetailByFriendshipId } from "@/hooks/apis/friendship/useGetFriendDetailByFriendshipId";
import { useGetDirectChatMessages } from "@/hooks/apis/message/useGetDirectChatMessages";
import { useChannelMessage } from "@/hooks/context/useChannelMessage";
import { useMessageOptionsModal } from "@/hooks/context/useMessageOptionsModal";
import { useSocketHook } from "@/hooks/context/useSocketHook";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export const DirectMessageRightPanel = ()=>{

    const { friendshipId } = useParams();
    const { joinDirectChatRoom } = useSocketHook();
    const queryClient = useQueryClient()
    const { directChatMessages,directChatisSuccess,directChatispending } = useGetDirectChatMessages()
    const { friendDetail,isPendingFriendDetail } = useGetFriendDetailByFriendshipId()
    const { messageList,setMessageList } = useChannelMessage()
    const directMessageRef = useRef();
    
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

    
    
    return(
        <div
            className="flex flex-col h-screen bg-gray-700"
        >
            <DirectChatHeader
                friendDetail={friendDetail}
            />

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