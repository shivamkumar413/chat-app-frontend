import { useAuth } from "@/hooks/context/AuthContextHook";
import { useSocketHook } from "@/hooks/context/useSocketHook";
import { PlusIcon, Send, SendHorizontalIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";


export const Editor = ()=>{
    
    const {workspaceId,channelId,friendshipId} = useParams()
    const { auth } = useAuth()
    const textAreaRef = useRef();
    const { SendMessage, sendDirectMessage } = useSocketHook();
    
    const [keyPressed,setKeyPressed] = useState({
        isShiftPressed : false,
        isEnterPressed : false,
    })

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

    async function sendMessage(){
        let msg = textAreaRef.current.value;
        msg = msg.trim();
        if(msg.length === 0 || msg === ''){
            console.log("Msg length is 0");
            return;
        }
        // if(e.key === 'enter') console.log("enter clicked")
        if(channelId){
            await SendMessage(
                {
                    workspaceId : workspaceId,
                    channelId : channelId,
                    senderId : auth?.user?._id,
                    messageContent : textAreaRef.current.value
                }
            )
        }else if(friendshipId){
            await sendDirectMessage(
                {
                    senderId : auth?.user?._id,
                    friendshipId : friendshipId,
                    messageContent : textAreaRef.current.value
                }
            )
        }
        
        textAreaRef.current.value = ''
    }

    async function handleKeyboardButtonsClick(e){
        console.log("Button clicked")

        if(e.key === 'Enter'){
            e.preventDefault();
            console.log("Enter clicked");
            //setKeyPressed({...keyPressed,isEnterPressed : true})
            await sendMessage()
        }
 
    }

    async function handleSendClick(e){
        console.log("Send clicked : ",textAreaRef.current.value)
        await sendMessage()
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
                onKeyDown={handleKeyboardButtonsClick}
                
            />

            <div className="px-2"
                onClick={handleSendClick}
            >
                <SendHorizontalIcon className="cursor-pointer text-white" /> 
            </div>
            
        </div>
    )
}