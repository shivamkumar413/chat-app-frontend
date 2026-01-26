import { createContext, useState } from "react";

const WorkspacePanelPreferencesContext = createContext()

export const WorkspacePanelPreferencesContextProvider = ({children})=>{

    const [openPreferencesModal,setOpenPreferencesModal] = useState(false)
    const [workspaceName,setWorkspaceName] = useState(null);
    return(
        <WorkspacePanelPreferencesContext.Provider 
            value={{openPreferencesModal,setOpenPreferencesModal,workspaceName,setWorkspaceName}}
        >
            {children}
        </WorkspacePanelPreferencesContext.Provider>
    )
}

export default WorkspacePanelPreferencesContext;