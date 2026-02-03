import { createContext, useState } from "react";

const CreateChannelModalContext = createContext()

export const CreateChannelModalContextProvider = ({children})=>{

    const [isCreateChannelModalOpen,SetIsCreateChannelModalOpen] = useState(false)
    return(
        <CreateChannelModalContext.Provider value={{isCreateChannelModalOpen,SetIsCreateChannelModalOpen}}>
            {children}
        </CreateChannelModalContext.Provider>
    )   
}

export default CreateChannelModalContext;