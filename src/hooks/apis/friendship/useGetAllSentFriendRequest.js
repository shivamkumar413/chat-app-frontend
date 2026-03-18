import { getAllSentFriendRequest } from "@/apis/friendship";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";

export function useGetAllSentFriendRequest(){

    const {auth} = useAuth();

    const { data : sentPendingRequests,isPending,isSuccess,error } = useQuery({
        queryFn : ()=>getAllSentFriendRequest({token : auth?.token}),
        queryKey : ['getallsentfriendrequest'],
        staleTime : 30000,
    })

    return {
        sentPendingRequests,
        isPending,
        isSuccess,
        error
    }

}