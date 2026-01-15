import { getAllWorkspace } from "@/apis/workspace/getAllWorkspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";

export function useGetAllWorkspace(){
    console.log("At get all workspace")
    const {auth} = useAuth()
    const {data,error,isPending,isSuccess} = useQuery({
        queryFn : ()=>getAllWorkspace(auth?.token),
        queryKey : ['fetchworkspaces'],
    })

    return {
        data,
        error,
        isPending,
        isSuccess
    }
}