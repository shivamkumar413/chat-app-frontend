import { getUserByUsername } from "@/apis/user";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";

export function useGetuserbyusername(){
    const {auth} = useAuth()
    const {data,error,isPending,isSuccess} = useQuery({
        queryFn : ()=>getUserByUsername({username,token : auth?.token}),
        queryKey : ['getuserbyusername'],
        staleTime : 0
    })

    return {
        data,
        error,
        isPending,
        isSuccess,
    }
}