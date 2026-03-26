import { CreateWorkspaceModal } from "@/components/molecules/createWorkspaceModal/CreateWorkspaceModal"
import { WorkpacePanelPreferencesModal } from "../Workspace/WorkspacePanelPreferencesModal"
import { CreateChannelModal } from "../Channel/CreateChannelModal"
import { CountdownModal } from "@/components/molecules/CountdownModal/CountdownModal"
import { MessageButtonOptionModal } from "@/components/molecules/MessageButtonOptionModal/MessageButtonOptionModal"

export const Modal = ()=>{
    return(
        <>
            <CreateWorkspaceModal />
            <WorkpacePanelPreferencesModal />
            <CreateChannelModal />
            <CountdownModal />
            <MessageButtonOptionModal />
        </>
    )
}