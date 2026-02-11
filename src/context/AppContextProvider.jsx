import CombineContext from "@/utils/CombineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./createWorkspaceModalContext";
import { WorkspacePanelPreferencesContextProvider } from "./WorkspacePanelPreferencesContext";
import { CreateChannelModalContextProvider } from "./createChannelModalContext";
import { countdownContextProvider } from "./countdownModalContext";
import { SocketContextProvider } from "./SocketContext";
import { ChannelMessageContextProvider } from "./ChannelMessage";

export const AppContextProvider = CombineContext(
    ChannelMessageContextProvider,
    SocketContextProvider,
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePanelPreferencesContextProvider,
    CreateChannelModalContextProvider,
    countdownContextProvider
)