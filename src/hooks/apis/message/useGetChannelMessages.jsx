import { getPaginatedMessage } from "@/apis/message";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetChannelMessages(){

    const {channelId} = useParams()
    const {auth} = useAuth()

    const { isPending,isSuccess,data : channelMessages,error } = useQuery({
        queryFn : ()=>getPaginatedMessage(channelId,auth?.token),
        queryKey : ['fetchchannelmessages',channelId],
        staleTime : 10000,
    })

    return {
        isPending,
        isSuccess,
        channelMessages,
        error
    }
}