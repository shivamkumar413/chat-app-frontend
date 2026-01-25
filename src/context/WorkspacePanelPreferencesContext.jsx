import { createContext, useState } from "react";

const WorkspacePanelPreferencesContext = createContext()

export const WorkspacePanelPreferencesContextProvider = ({children})=>{

    const [openPreferencesModal,setOpenPreferencesModal] = useState(false)
    return(
        <WorkspacePanelPreferencesContext.Provider value={{openPreferencesModal,setOpenPreferencesModal}}>
            {children}
        </WorkspacePanelPreferencesContext.Provider>
    )
}

export default WorkspacePanelPreferencesContext;