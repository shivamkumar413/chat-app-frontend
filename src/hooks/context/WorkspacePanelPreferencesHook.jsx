import WorkspacePanelPreferencesContext from "@/context/WorkspacePanelPreferencesContext";
import { useContext } from "react";

export function useWorkspacePanelPreferencesHook(){
    return useContext(WorkspacePanelPreferencesContext)
}