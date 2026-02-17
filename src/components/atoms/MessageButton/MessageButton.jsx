import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/context/AuthContextHook"

export const MessageButton = ({message})=>{

    const { auth } = useAuth();

    //console.log("auth username and sender id : ",auth?.user?._id,message?.senderId?._id)

    function handleMessage(){
        //console.log("inside handle message")
        //console.log("auth username and sender id at handle change: ",auth?.user?._id,message?.senderId?._id)
        if(auth?.user?._id === message?.senderId?._id){
            console.log("yes true")
            return 'ml-auto'
        } 
        else return ''
    }

    return(
        <>
            <div className={`flex rounded-md bg-gray-100 ${handleMessage()} py-2 my-2 mx-2 items-center w-1/2`}>
                <Avatar>
                    <AvatarImage 
                        src={message?.senderId?.avatar}
                    />

                    <AvatarFallback>
                        {message?.senderId?.username?.split('')[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
               
                <div className="flex flex-col mx-1">
                    <span className="text-xs font-bold mb-0.5">{message.senderId.username}</span>
                    <span className="">{message?.body}</span>
                </div>
                
                
            </div>
            {/* <span className={`${handleMessage()} text-xs`}>{message?.createdAt}</span> */}
        </>
    )
}