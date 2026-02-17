import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/context/AuthContextHook"
import { useCreateWorkspaceModal } from "@/hooks/context/CreateWorkspaceModalHook"
import { LogOutIcon, PencilIcon, SettingsIcon, UserIcon } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"

export const UserButton = ()=>{

    const {auth,setAuth} = useAuth()
    const { setIsCreateWorkspaceModalOpen } = useCreateWorkspaceModal()
    const navigate = useNavigate()
    const {workspaceId} = useParams()

    async function handleLogout(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setAuth({
            user : null,
            token : null,
            isLoading : false,
        })

        toast.success("User signout successfull")
    }

    function handleCreateWorkspaceModal(){
        setIsCreateWorkspaceModalOpen(true)
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={auth?.user?.avatar}/>
                    <AvatarFallback>{auth?.user?.username[0]}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem 
                    onClick = {handleCreateWorkspaceModal}
                >
                    <PencilIcon className="size-4 mr-2 h-8"/>
                    Create Workspace
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={()=>navigate(`/settings/workspace/${workspaceId}`)}
                >
                    <SettingsIcon className="size-4 mr-2 h-8"/>
                    Settings
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={()=>navigate(`/profile/workspace/${workspaceId}`)}
                >
                    <UserIcon className="size-4 mr-2 h-8"/>
                    Profile
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={handleLogout}
                >
                    <LogOutIcon className="size-4 mr-2 h-8"/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}