import { useAuth } from "@/hooks/context/AuthContextHook";
import { useSocketHook } from "@/hooks/context/useSocketHook";
import { PlusIcon, Send, SendHorizontalIcon } from "lucide-react"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom";


export const Editor = ()=>{
    
    const {workspaceId,channelId} = useParams()
    const { auth } = useAuth()
    const textAreaRef = useRef();
    const { SendMessage } = useSocketHook();

    useEffect(()=>{
        if(!textAreaRef.current) return;

        textAreaRef.current.focus()
    },[])

    function handleInput(){
        const el = textAreaRef.current;
        // const inp = textAreaRef.current.value;
        // console.log(inp)
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";

    }

    async function handleSendClick(){
        console.log("Send clicked : ",textAreaRef.current.value)
        await SendMessage(
            {
                workspaceId : workspaceId,
                channelId : channelId,
                senderId : auth?.user?._id,
                messageContent : textAreaRef.current.value
            }
        )
        textAreaRef.current.value = ''
    }

    return(
        <div className="flex items-center bg-gray-800 py-2 px-2 text-white rounded-2xl mx-3 mb-15">

            <PlusIcon className="cursor-pointer"/>
            <textarea 
                ref={textAreaRef}
                onInput={handleInput}
                className="w-full px-2 outline-none resize-none bg-transparent"
                rows={1}
                placeholder="Write your message"
            />

            <div className="px-2"
                onClick={handleSendClick}
            >
                <SendHorizontalIcon className="cursor-pointer text-white" /> 
            </div>
            
        </div>
    )
}