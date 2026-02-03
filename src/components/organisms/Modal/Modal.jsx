import { CreateWorkspaceModal } from "@/components/molecules/createWorkspaceModal/CreateWorkspaceModal"
import { WorkpacePanelPreferencesModal } from "../Workspace/WorkspacePanelPreferencesModal"
import { CreateChannelModal } from "../Channel/CreateChannelModal"

export const Modal = ()=>{
    return(
        <>
            <CreateWorkspaceModal />
            <WorkpacePanelPreferencesModal />
            <CreateChannelModal />
        </>
    )
}