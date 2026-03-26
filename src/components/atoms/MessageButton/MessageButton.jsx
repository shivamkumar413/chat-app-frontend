import { MessageButtonOptionModal } from "@/components/molecules/MessageButtonOptionModal/MessageButtonOptionModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/context/AuthContextHook"
import { useMessageOptionsModal } from "@/hooks/context/useMessageOptionsModal";
import { useEffect, useRef } from "react";

export const MessageButton = ({message})=>{
    const {
        messageOptionModalPosition,
        setMessageOptionModalPosition,
        isMessageOptionsModalOpen,
        setIsMessageOptionsModalOpen,
        setSelectedElement
    } = useMessageOptionsModal();
    const { auth } = useAuth();
    const messageButtonRef = useRef(null);
    
    let hour = message?.createdAt.split("T")[1].split(".")[0].split(":")[0];   
    hour = Number(hour)+5;
    let min = message?.createdAt.split("T")[1].split(".")[0].split(":")[1];
    min = Number(min) + 30;
    if(min>60){
        hour = hour + 1;
        min = min - 60;
    }
    if(hour >= 24){
        hour = hour - 24;
    }

    function handleMessageOptionModalClick(){
        const element = messageButtonRef?.current;
        setSelectedElement(message);
        setIsMessageOptionsModalOpen(true);
        setMessageOptionModalPosition({top : messageButtonRef?.current.getBoundingClientRect().top,left : messageButtonRef?.current.getBoundingClientRect().left -125})
    }
    
    function handleMessage(){
        if(auth?.user?._id === message?.senderId?._id){
            return 'ml-auto'
        } 
        else return ''
    }

    return(
        <>
            <div 
                onClick={(e)=>handleMessageOptionModalClick()}
                className={`flex rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer transition-colors ${handleMessage()} py-2 my-2 mx-2 items-center w-1/2`}
                ref={messageButtonRef}
            >
                <Avatar>
                    <AvatarImage 
                        src={message?.senderId?.avatar}
                    />

                    <AvatarFallback>
                        {message?.senderId?.username?.split('')[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
               
                <div className="flex justify-between mx-1 w-full">
                    <div className="flex flex-col justify-center w-full">
                        <span className="text-xs font-bold mb-0.5">{message.senderId.username}</span>
                        <span className="">{message?.body}</span>
                    </div>
                    
                    
                    <span
                        className="text-[10px] font-semibold flex items-end"
                    >
                        {(hour > 9) ? hour : `0${hour}`}:{(min > 9) ? min : `0${min}`}
                    </span>
                    
                    
                </div>
                
            </div>
            
        </>
    )
}