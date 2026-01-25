import { WorkspaceNavBar } from "@/components/organisms/Workspace/WorkspaceNavBar"
import { WorkspacePanel } from "@/components/organisms/Workspace/WorkspacePanel"
import { WorkspaceSideBar } from "@/components/organisms/Workspace/WorkspaceSideBar"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable" 

import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { useEffect } from "react"

export const WorkspaceLayout = ({children})=>{

    const {workspaceDetails,isPending,isSuccess} = useGetWorkspaceDetails()

    useEffect(()=>{
        if(isPending) return
        console.log("Workspace details : ",workspaceDetails)
    },[isPending,isSuccess])
    console.log("Group:", ResizablePanelGroup)
    console.log("Panel:", ResizablePanel)
    console.log("Handle:", ResizableHandle)
    return(
        <div className="h-screen">
            <WorkspaceNavBar />
            <div className="flex h-[calc(100vh-40px)]">
                <WorkspaceSideBar />

                <ResizablePanelGroup 
                    direction="horizontal"
                >
                    <ResizablePanel
                        defaultSize={200}
                        minSize={0}
                            className="bg-[#5865F2]/80"
                    >
                        <WorkspacePanel />
                    </ResizablePanel>
                    <ResizableHandle withHandle />

                    <ResizablePanel>
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            
        </div>
    )
}