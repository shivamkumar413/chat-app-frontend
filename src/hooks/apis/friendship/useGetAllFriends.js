import { getAllFriends } from "@/apis/friendship";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";

export function useGetAllFriends(){
    const { auth } = useAuth();
    const {data : allFriends,isPending,isSuccess,error} =  useQuery({
        queryFn : ()=>getAllFriends({token : auth?.token}),
        queryKey : ['fetchallfriends'],
        staleTime : 50000,
    })

    return {
        allFriends,
        isPending,
        isSuccess,
        error
    }
}

