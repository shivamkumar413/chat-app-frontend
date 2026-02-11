import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const MessageButton = ({message})=>{

    return(
        <div className="flex bg-gray-100 rounded-md py-2 my-2 mx-2 items-center w-1/2">
            <Avatar>
                <AvatarImage 
                    src={message?.senderId?.avatar}
                />

                <AvatarFallback>
                    {/* {message?.senderId?.username.split('')[0].toUpperCase()} */}
                </AvatarFallback>
            </Avatar>
            <span className="mx-2">{message?.body}</span>
            
        </div>
    )
}