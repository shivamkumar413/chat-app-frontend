import { getChannelById } from "@/apis/channel";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetChannelById(channelId){

    const { auth } = useAuth()

    const {isPending,isSuccess,data : channelData,error} = useQuery({
        queryFn : ()=>getChannelById(channelId,auth?.token),
        queryKey : [`channel-${channelId}`]
    })

    return {
        isPending,
        isSuccess,
        channelData,
        error
    }
}