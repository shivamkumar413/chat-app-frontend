import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"

export const WorkspacePanel = ()=>{

    const { workspaceDetails,isPending,isSuccess } = useGetWorkspaceDetails()

    return(
        <div className="flex flex-col h-full bg-[#5865F2]/80">
            <WorkspacePanelHeader workspace={workspaceDetails} />
        </div>
    )
}