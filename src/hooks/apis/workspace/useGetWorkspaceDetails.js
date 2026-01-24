import { getWorkspaceDetails } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetWorkspaceDetails(){

    const { auth } = useAuth()
    const {workspaceId} = useParams();

    //console.log("params at getwsdetails : ",params)
    const {data : workspaceDetails, isPending,isSuccess,error} = useQuery({
        queryFn : ()=>getWorkspaceDetails({workspaceId : workspaceId,token : auth?.token}),
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