import { Phone, PhoneIcon, VideoIcon } from "lucide-react"

export const DirectChatHeader = ({friendDetail})=>{
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