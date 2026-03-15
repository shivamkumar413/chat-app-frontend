import { useAuth } from "@/hooks/context/AuthContextHook"
import { useNavigate, useParams } from "react-router-dom"

export const SettingLeftPanel = ()=>{

    const { auth } = useAuth()
    const navigate = useNavigate()
    //const {workspaceId} = useParams()

    return(
        <div className="bg-gray-800 h-screen  ">
            <header 
                className="border-b border-gray-500 py-2 flex items-center cursor-pointer"
                onClick={()=>navigate(`/profile`)}
            >
                <img 
                    className="w-15 h-15 rounded-full"
                    src={auth?.user?.avatar}
                    alt={auth?.user?.username[0].toUpperCase()}
                />

                <div 
                    className="mx-2 text-gray-300"
                >
                    {auth?.user?.username}
                </div>
            </header>
        </div>
    )
}