import CombineContext from "@/utils/CombineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./createWorkspaceModalContext";
import { WorkspacePanelPreferencesContextProvider } from "./WorkspacePanelPreferencesContext";
import { CreateChannelModalContextProvider } from "./createChannelModalContext";
import { countdownContextProvider } from "./countdownModalContext";
import { SocketContextProvider } from "./SocketContext";
import { ChannelMessageContextProvider } from "./ChannelMessage";
import { MessageOptionsModalContextProvider } from "./MessageOptionsModal";
import { videocallContextProvider } from "./VideoCallingContext";

export const AppContextProvider = CombineContext(
    AuthContextProvider,
    videocallContextProvider,
    ChannelMessageContextProvider,
    SocketContextProvider,
    
    CreateWorkspaceContextProvider,
    WorkspacePanelPreferencesContextProvider,
    CreateChannelModalContextProvider,
    countdownContextProvider,
    MessageOptionsModalContextProvider,
    
    
)