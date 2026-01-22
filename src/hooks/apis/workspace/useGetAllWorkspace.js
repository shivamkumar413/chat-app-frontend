import { getAllWorkspace } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";

export function useGetAllWorkspace(){
    console.log("At get all workspace")
    const {auth} = useAuth()
    const {data : workspaces,error,isPending,isSuccess} = useQuery({
        queryFn : ()=>getAllWorkspace(auth?.token),
        queryKey : ['fetchworkspaces'],
        staleTime : 30000
    })

    return {
        workspaces,
        error,
        isPending,
        isSuccess
    }
}