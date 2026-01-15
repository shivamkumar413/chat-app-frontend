import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/context/AuthContextHook"
import { LogOutIcon, SettingsIcon } from "lucide-react"
import { toast } from "sonner"

export const UserButton = ()=>{

    const {auth,setAuth} = useAuth()

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

    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={auth?.user?.avatar}/>
                    <AvatarFallback>{auth?.user?.username[0]}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <SettingsIcon className="size-4 mr-2 h-8"/>
                    Settings
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