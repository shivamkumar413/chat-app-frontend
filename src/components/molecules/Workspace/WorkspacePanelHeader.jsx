import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useGetIsUserAdminOfWorkspace } from "@/hooks/apis/workspace/useGetIsUserAminOfWorkspace"
import { useWorkspacePanelPreferencesHook } from "@/hooks/context/WorkspacePanelPreferencesHook"
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import { useEffect } from "react"

export const WorkspacePanelHeader = ({workspace})=>{


    const { IsUserAdminOfWs,isFetching,isSuccess,error } = useGetIsUserAdminOfWorkspace()
    const { setOpenPreferencesModal } = useWorkspacePanelPreferencesHook()


    //console.log("ws response for if user is admin : ",IsUserAdminOfWs?.isUserAdmin)
    return(
        <>
            <div className="flex items-center justify-between px-4 h-12.5 gap-0.5">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button
                            variant="transparent"
                            className='font-semibold  text-white text-sm w-auto p-1.5 overflow-hidden'
                        >
                            <span
                                className="truncate"
                            >
                                {workspace?.name}
                            </span>
                            <ChevronDownIcon className='size-5 ml-1' />

                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent 
                        side='bottom' align='start' className='w-64 bg-white rounded-md shadow-lg'
                    >
                        <DropdownMenuItem>
                            <div 
                                 className='size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2 bg-[#616061]'
                            >
                                {workspace?.name[0].toUpperCase()}
                            </div>
                            <div
                                className="flex flex-col items-start"
                            >
                                <p
                                    className="font-semibold text-sm"
                                >
                                    {workspace?.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Active Workspace
                                </p>
                            </div>
                        </DropdownMenuItem>

                        {
                            IsUserAdminOfWs?.isUserAdmin &&(
                                <>
                                    <DropdownMenuItem
                                        onClick={()=>setOpenPreferencesModal(true)}
                                        className={'text-sm'}
                                    >
                                        Preferences
                                    </DropdownMenuItem>

                                    <DropdownMenuItem
                                        className={'text-sm'}
                                    >
                                        Invite people to {workspace?.name}
                                    </DropdownMenuItem>
                                </>
                            )
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}