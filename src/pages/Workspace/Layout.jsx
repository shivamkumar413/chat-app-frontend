import { WorkspaceNavBar } from "@/components/organisms/Workspace/WorkspaceNavBar"
import { WorkspaceSideBar } from "@/components/organisms/Workspace/WorkspaceSideBar"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { useEffect } from "react"

export const WorkspaceLayout = ({children})=>{

    const {workspaceDetails,isPending,isSuccess} = useGetWorkspaceDetails()

    useEffect(()=>{
        if(isPending) return
        console.log("Workspace details : ",workspaceDetails)
    },[isPending,isSuccess])

    return(
        <div className="h-screen">
            <WorkspaceNavBar />
            <div className="flex h-[calc(100vh-40px)]">
                <WorkspaceSideBar />
                {children}
            </div>
            
        </div>
    )
}