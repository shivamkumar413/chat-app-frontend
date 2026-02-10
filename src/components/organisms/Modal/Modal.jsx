import { CreateWorkspaceModal } from "@/components/molecules/createWorkspaceModal/CreateWorkspaceModal"
import { WorkpacePanelPreferencesModal } from "../Workspace/WorkspacePanelPreferencesModal"
import { CreateChannelModal } from "../Channel/CreateChannelModal"
import { CountdownModal } from "@/components/molecules/CountdownModal/CountdownModal"

export const Modal = ()=>{
    return(
        <>
            <CreateWorkspaceModal />
            <WorkpacePanelPreferencesModal />
            <CreateChannelModal />
            <CountdownModal />
        </>
    )
}