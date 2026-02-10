import CombineContext from "@/utils/CombineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./createWorkspaceModalContext";
import { WorkspacePanelPreferencesContextProvider } from "./WorkspacePanelPreferencesContext";
import { CreateChannelModalContextProvider } from "./createChannelModalContext";
import { countdownContextProvider } from "./countdownModalContext";

export const AppContextProvider = CombineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePanelPreferencesContextProvider,
    CreateChannelModalContextProvider,
    countdownContextProvider
)