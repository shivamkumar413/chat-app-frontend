import { useSocketHook } from "@/hooks/context/useSocketHook";
import { PhoneIcon, VideoIcon } from "lucide-react"
import { useParams } from "react-router-dom"

export const DirectChatHeader = ({friendDetail})=>{

    const { friendshipId } = useParams();
    const { ringVideoCall,socket } = useSocketHook();
    console.log("friend detail at direct chat header : ",friendDetail);

    async function handleVideoCallClick(){
        
        await ringVideoCall(
            {
                friendshipId : friendshipId,
            }
        );
    }

    return (
        <>
            <div className="py-2 border-b border-black flex items-center justify-between">
                <div className="flex items-center">
                <span 
                    className="bg-gray-300 mx-2 rounded-full p-1"
                >
                    <img 
                        className="w-10 h-10"
                        src={(typeof friendDetail?.requester === 'string')
                                ? 
                            friendDetail?.recipient?.avatar 
                                : 
                            friendDetail?.requester?.avatar
                        } 
                        alt="" 
                    />
                </span>
                <span
                    className="text-xl font-mono mx-2"
                >
                    {(typeof friendDetail?.requester === 'string')
                            ?
                        friendDetail?.recipient?.username
                            :
                        friendDetail?.requester?.username
                        
                    }
                </span>
                </div>

                <div
                    className="flex mr-8 gap-5 items-center"
                >
                    <VideoIcon 
                        onClick={handleVideoCallClick}
                        className="mx-2 cursor-pointer"
                    />
                    
                    <PhoneIcon 
                        className="mx-2 size-5 cursor-pointer" 
                    />
                </div>
            </div>
        </>
    )
}

// how to add video calling feature for two people ??
// 1. 