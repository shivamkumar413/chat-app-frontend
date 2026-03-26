import MessageOptionsModalContext from "@/context/MessageOptionsModal"
import { useContext } from "react"

export const useMessageOptionsModal = ()=>{
    return useContext(MessageOptionsModalContext);
}