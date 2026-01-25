import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useGetAllWorkspace } from "@/hooks/apis/workspace/useGetAllWorkspace"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { LucideLoader2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const WorkspaceSwitcher = ()=>{

    const { isPending,workspaceDetails } = useGetWorkspaceDetails()
    const navigate = useNavigate()

    const { workspaces, isPending : isPendingGetAllWorkspaces, isSuccess } = useGetAllWorkspace()
    console.log("ws details : ",workspaceDetails)
    console.log("all workspaces at ws switcher : ",workspaces)

    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                    className={'size-12 relative overflow-hidden bg-[#2B2D31] hover:bg-[#35363C] font-semibold text-xl'}
                    
                >
                    {isPending ? <LucideLoader2 className="animate-spin size-5"/> : workspaceDetails?.name[0].toUpperCase()}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem
                    className={'flex flex-col items-center justify-start cursor-pointer'}
                >
                    {workspaceDetails?.name}
                    <span className="text-xs font-semibold">
                        (Active Workspace)
                    </span>
                </DropdownMenuItem>

                
                    {workspaces?.map((workspace)=>{
                        if(workspaceDetails?._id !== workspace?._id){
                            return(
                               
                                <DropdownMenuItem 
                                    className={'flex flex-col items-center justify-start cursor-pointer'}
                                    onClick={()=>navigate(`/workspace/${workspace?._id}`)}
                                    key={workspace?._id}
                                >
                                        <p className="truncate">{workspace?.name}</p>
                                </DropdownMenuItem>
                                
                            )
                        }
                        
                    })}
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}