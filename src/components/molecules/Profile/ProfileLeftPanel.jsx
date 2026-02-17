import { useAuth } from "@/hooks/context/AuthContextHook"
import { InfoIcon, UserIcon } from "lucide-react"

export const ProfileLeftPanel = ()=>{

    const { auth } = useAuth()

    return(
        <div className="bg-gray-800 h-screen text-gray-300">
            <header className="flex justify-center items-center">
                <img 
                    className="w-25 h-25 rounded-full my-2"
                    src={auth?.user?.avatar}
                />
            </header>

            <div className="w-full">

                <div className="flex items-center ml-2 my-2">
                    <UserIcon className="size-8 text-gray-300"/>
                    <div className="mx-3">
                        <div className="font-semibold text-lg">Username</div>
                        <div>{auth?.user?.username}</div>
                    </div>
                </div>

                <div className="flex items-center ml-2 my-2">
                    <InfoIcon className="size-8 text-gray-300"/>
                    <div className="mx-3">
                        <div className="font-semibold text-lg">About</div>
                        <div>description</div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}