import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { useEffect } from "react";

export const Channel = ()=>{

    const {workspaceDetails,isPending,isSuccess,error} = useGetWorkspaceDetails()

    useEffect(()=>{
        if(isPending) return;

        console.log("Workspace details at channel : ",workspaceDetails)

    },[isPending,isSuccess])

    return(
        <>
            Channel
        </>
    )
}