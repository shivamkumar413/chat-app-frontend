import { createContext, useRef, useState } from "react"

const MessageOptionsModalContext = createContext();

export const MessageOptionsModalContextProvider = ({children})=>{

    const [isMessageOptionsModalOpen,setIsMessageOptionsModalOpen] = useState(false)
    const [messageOptionModalPosition,setMessageOptionModalPosition] = useState({
        top : 0,
        left : 0,
    })
    const [selectedElement, setSelectedElement] = useState(null);
    
    return(
        <MessageOptionsModalContext.Provider 
            value={{
                isMessageOptionsModalOpen,
                setIsMessageOptionsModalOpen,
                messageOptionModalPosition,
                setMessageOptionModalPosition,
                selectedElement,
                setSelectedElement
            }}
        >
            {children}
        </MessageOptionsModalContext.Provider>
    )
}

export default MessageOptionsModalContext;