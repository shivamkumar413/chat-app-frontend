import CombineContext from "@/utils/CombineContext";
import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider } from "./createWorkspaceModalContext";

export const AppContextProvider = CombineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
)