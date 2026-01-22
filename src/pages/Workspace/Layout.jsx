import { WorkspaceSideBar } from "@/components/molecules/WorkspaceSideBar/WorkspaceSideBar"

export const WorkspaceLayout = ({children})=>{
    return(
        <div className="h-screen">
            <WorkspaceSideBar />
            {children}
        </div>
    )
}