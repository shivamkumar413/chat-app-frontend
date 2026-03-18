import { DirectChatHeader } from "@/components/molecules/DirectMessage/DirectChatHeader";
import { useGetFriendDetailByFriendshipId } from "@/hooks/apis/friendship/useGetFriendDetailByFriendshipId";
import { useSocketHook } from "@/hooks/context/useSocketHook";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const DirectMessageRightPanel = ()=>{

    const {friendshipId} = useParams();
    const {joinDirectChatRoom} = useSocketHook();
    const queryClient = useQueryClient()

    const { friendDetail,isPendingFriendDetail } = useGetFriendDetailByFriendshipId()
    //console.log('friend detail at chat page : ',friendDetail);
    useEffect(()=>{
        if(!friendshipId || isPendingFriendDetail) return;
        joinDirectChatRoom(friendshipId);
    },[isPendingFriendDetail])

    useEffect(()=>{
        queryClient.invalidateQueries('getfrienddetailbyfriendshipid')
    },[friendshipId])

    
    return(
        <>
            <DirectChatHeader
                friendDetail={friendDetail}
            />
        </>
    )
}