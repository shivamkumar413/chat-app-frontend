import { MessageButtonOptionChip } from "@/components/atoms/MessageButton/MessageButtonOptionChip";
import { useDeleteMessage } from "@/hooks/apis/message/useDeleteMessage";
import { useMessageOptionsModal } from "@/hooks/context/useMessageOptionsModal";
import { useQueryClient } from "@tanstack/react-query";
import { CopyIcon, ForwardIcon, InfoIcon, ReplyIcon, Trash2Icon, XIcon } from "lucide-react";
import { useParams } from "react-router-dom";

export const MessageButtonOptionModal = ()=>{

    const {
        messageOptionModalPosition,
        setMessageOptionModalPosition,
        isMessageOptionsModalOpen,
        setIsMessageOptionsModalOpen,
        selectedElement
    } = useMessageOptionsModal();
    
    const { friendshipId } = useParams()
    const { deleteMessageMutation } = useDeleteMessage();
    const queryClient = useQueryClient();


    async function handleCopyClick(){
        await navigator.clipboard.writeText(selectedElement?.body);
    }

    async function handleDeleteMessageClick(){
        try {
            await deleteMessageMutation({messageId : selectedElement?._id})
            console.log("deleted")
            queryClient.invalidateQueries(`directchatmessage-${friendshipId}`)

        } catch (error) {
            console.log(error);
            throw error;
        }
        setIsMessageOptionsModalOpen(false)
    }

    return(
        <>
            {isMessageOptionsModalOpen &&
                <div
                    className={`flex flex-col bg-gray-800 text-white fixed rounded-md z-10`}
                    style={{
                        top: `${messageOptionModalPosition.top}px`,
                        left: `${messageOptionModalPosition.left}px`
                    }}
                >
                    <span
                        className="cursor-pointer flex justify-end items-center mx-2 mt-2"
                        
                        onClick={()=>{setIsMessageOptionsModalOpen(false)
                            console.log(isMessageOptionsModalOpen)
                        }}
                    >
                        <XIcon className="size-5"/>
                    </span>
                    <MessageButtonOptionChip 
                        
                        Icon={InfoIcon}
                        name={"Details"}
                    />
                    
                    <MessageButtonOptionChip 
                        handleClick={()=>handleCopyClick()}
                        Icon={CopyIcon}
                        name={"Copy"}
                    />
                    <MessageButtonOptionChip 
                        Icon={ReplyIcon}
                        name={"Reply"}
                    />
                    <MessageButtonOptionChip 
                        handleClick={()=>handleDeleteMessageClick()}
                        Icon={Trash2Icon}
                        name={"Delete"}
                    />
                    <MessageButtonOptionChip 
                        Icon={ForwardIcon}
                        name={"Forward"}
                    />
                </div>
            }
        </>
        
    )
}