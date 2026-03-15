import { getAllRecievedFriendRequest } from "@/apis/friendship";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";

export function useGetallRecievedFriendRequest(){

    const {auth} = useAuth();

    const { data,isPending,isSuccess,error } = useQuery({
        queryFn : ()=>getAllRecievedFriendRequest({token : auth?.token}),
        queryKey : ['fetchallrecievedfriendrequest'],
        staleTime : 30000,
    })

    return{
        data,
        isPending,
        isSuccess,
        error
    }
}