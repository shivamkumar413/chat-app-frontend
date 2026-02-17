import { useAuth } from "@/hooks/context/AuthContextHook"

export const ProfileRightPanel = ()=>{

    const { auth } = useAuth()

    return(
        <div className="h-full flex items-center justify-center">
            <img 
                className="h-25 w-25 rounded-full"
                src={auth?.user.avatar} 
                alt={auth?.user.username.split("")[0].toUpperCase()}
            />
        </div>
    )
}

