import { createContext, useState } from "react";

const createWorkspaceContext = createContext()

export const CreateWorkspaceContextProvider = ({children})=>{

    const [isCreateWorkspaceModalOpen,setIsCreateWorkspaceModalOpen] = useState(false)

    return(
        <createWorkspaceContext.Provider value={{isCreateWorkspaceModalOpen,setIsCreateWorkspaceModalOpen}}>
            {children}
        </createWorkspaceContext.Provider>
    )
}

export default createWorkspaceContext;