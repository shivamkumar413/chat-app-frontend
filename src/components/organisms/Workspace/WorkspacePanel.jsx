import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader"
import { WorkspacePanelSection } from "@/components/molecules/Workspace/WorkspacePanelSection"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { useCreateChannelModalHook } from "@/hooks/context/CreateChannelModalHook"
import { useWorkspacePanelPreferencesHook } from "@/hooks/context/WorkspacePanelPreferencesHook"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const WorkspacePanel = ()=>{

    const { workspaceDetails,isPending,isSuccess } = useGetWorkspaceDetails()
    const { workspaceId,setWorkspaceId,setWorkspaceName } = useWorkspacePanelPreferencesHook()
    const { SetIsCreateChannelModalOpen } = useCreateChannelModalHook()
    const navigate = useNavigate();

    useEffect(()=>{
        if(isPending) return;

        console.log("workspace at ws panel : ",workspaceDetails)
        setWorkspaceId(workspaceDetails?._id)
        setWorkspaceName(workspaceDetails?.name)
    },[isPending,isSuccess])

    function handleChannelModalOpen(){
        SetIsCreateChannelModalOpen(true)
    }

    return(
        <div className="flex flex-col h-full bg-[#5865F2]/80">
            <WorkspacePanelHeader workspace={workspaceDetails} />
            {/* <div className="ml-2 text-white">
                <PlusSquareIcon 
                    className="font-extralight size-10" 
                    onClick={handleChannelModalOpen}    
                />
            </div> */}

            <WorkspacePanelSection
                label={'channels'}
                onIconClick={handleChannelModalOpen}
            >
                {  
                    workspaceDetails?.channels?.map((channel)=>{
                        return(
                            <>
                                <div 
                                    className="font-semibold text-sm text-white ml-2 cursor-pointer py-1 hover:bg-[#5865F2]" 
                                    key={channel?._id}
                                    onClick={()=>navigate(`/workspace/${workspaceId}/channel/${channel?._id}`)}
                                >
                                    {`# ${channel?.name}`}
                                </div>
                            </>
                        )
                    })
                }
            </WorkspacePanelSection>

        </div>
    )
}