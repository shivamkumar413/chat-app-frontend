import { getWorkspaceDetails } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";

export function useGetWorkspaceDetails(){

    const { auth } = useAuth()

    const {data : workspaceDetails, isPending,isSuccess,error} = useQuery({
        queryFn : (data)=>getWorkspaceDetails({...data,token : auth?.token}),
        queryKey : [`workspaceById-${workspaceId}`],
        staleTime : 10000
    })

    return {
        workspaceDetails,
        isPending,
        isSuccess,
        error
    }   
}