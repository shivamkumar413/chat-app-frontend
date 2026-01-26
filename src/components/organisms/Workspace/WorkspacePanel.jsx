import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { useWorkspacePanelPreferencesHook } from "@/hooks/context/WorkspacePanelPreferencesHook"
import { useEffect } from "react"

export const WorkspacePanel = ()=>{

    const { workspaceDetails,isPending,isSuccess } = useGetWorkspaceDetails()
    const { setWorkspaceId,setWorkspaceName } = useWorkspacePanelPreferencesHook()

    useEffect(()=>{
        if(isPending) return;

        console.log("workspace at ws panel : ",workspaceDetails)
        setWorkspaceId(workspaceDetails?._id)
        setWorkspaceName(workspaceDetails?.name)
    },[isPending,isSuccess])

    return(
        <div className="flex flex-col h-full bg-[#5865F2]/80">
            <WorkspacePanelHeader workspace={workspaceDetails} />
        </div>
    )
}