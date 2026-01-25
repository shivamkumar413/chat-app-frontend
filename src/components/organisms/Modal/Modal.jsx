import { CreateWorkspaceModal } from "@/components/molecules/createWorkspaceModal/CreateWorkspaceModal"
import { WorkpacePanelPreferencesModal } from "../Workspace/WorkspacePanelPreferencesModal"

export const Modal = ()=>{
    return(
        <>
            <CreateWorkspaceModal />
            <WorkpacePanelPreferencesModal />
        </>
    )
}