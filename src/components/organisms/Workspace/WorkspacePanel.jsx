import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader"
import { WorkspacePanelSection } from "@/components/molecules/Workspace/WorkspacePanelSection"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { useCreateChannelModalHook } from "@/hooks/context/CreateChannelModalHook"
import { useWorkspacePanelPreferencesHook } from "@/hooks/context/WorkspacePanelPreferencesHook"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { WorkspaceSwitcher } from "./WorkspaceSwithcher"

export const WorkspacePanel = ()=>{

    const { workspaceDetails,isPending,isSuccess } = useGetWorkspaceDetails()
    const { workspaceId,setWorkspaceId,setWorkspaceName } = useWorkspacePanelPreferencesHook()
    const { SetIsCreateChannelModalOpen } = useCreateChannelModalHook()
    const navigate = useNavigate();
    const {workspaceId : workspaceIdParams} = useParams()

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
        <div className="flex flex-col h-full bg-gray-800">
            <WorkspaceSwitcher />
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
                                    className="font-semibold text-sm text-gray-300 mx-2 px-2 rounded-md cursor-pointer py-1 hover:bg-gray-900" 
                                    key={channel?._id}
                                    onClick={()=>navigate(`/workspace/${workspaceIdParams}/channel/${channel?._id}`)}
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