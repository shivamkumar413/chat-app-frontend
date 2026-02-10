import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { Pencil, SearchIcon, UserPlus2Icon, X } from "lucide-react"
import { AddUserToWorkspaceModal } from "./AddUserToWorkspaceModal"
import { useState } from "react"
import { useCountdownModalContextHook } from "@/hooks/context/CountdownModalContextHook"

export const WorkspaceDetailModal = ({workspaceModalOpen,setWorkspaceModalOpen})=>{

    const { workspaceDetails } = useGetWorkspaceDetails()
    const [open,setOpen] = useState(false)
    const { setCountdownModal } = useCountdownModalContextHook()


    return(
        <>

        <AddUserToWorkspaceModal 
            open={open}
            setOpen={setOpen}
        />

        <div 
            className={`h-[calc(100vh-40px)] w-96 overflow-hidden absolute right-0 bg-gray-800 ${workspaceModalOpen ? 'block' : 'hidden'}`}
        >   
            <div className="flex justify-between text-gray-200 mt-1">
                <span className="mx-2 font-semibold">Workspace info</span>
                <X 
                    onClick={()=>setWorkspaceModalOpen(!workspaceModalOpen)}
                    className="text-white mx-2 cursor-pointer" 
                />
            </div>
            
            <div className="mt-5 text-gray-200">
                <div className="flex flex-col items-center justify-center">
                    <img 
                        className="w-20 h-20"
                        src="https://wallpapers.com/images/hd/placeholder-profile-icon-20tehfawxt5eihco.jpg" 
                        alt="" 
                    />
                    <div className="mt-10 w-full flex items-center justify-center">
                        <span className="text-xl ml-auto">{workspaceDetails?.name}</span>
                        <div className="ml-auto">
                            <Pencil className="mr-4 size-4 cursor-pointer text-right ml-auto"/> 
                        </div>
                        
                    </div>
                    
                    <div>
                        <span className="text-sm">workspace</span>
                        <span className="text-green-500 ml-2 text-sm">{workspaceDetails?.members.length} members</span>
                    </div>
                    
                </div>
                
            </div>

            <div className="flex items-center justify-center w-full gap-x-2 my-1">
                {
                    workspaceDetails?.members.map((member)=>{
                        return(
                            <>
                                {member.role === 'admin' ? 
                                    <Button
                                        onClick={()=>setOpen(true)}
                                        className={'flex flex-col h-auto w-30 py-4 my-2 border border-gray-600 bg-gray-800 hover:bg-gray-700'}
                                    >
                                        <UserPlus2Icon className="size-5 text-green-500"/>
                                        <span>Add</span>
                                    </Button>
                                    :
                                    null
                                }
                            </>
                        )
                        
                    })
                }
                

                <Button
                    onClick={()=>setCountdownModal(true)}
                    className={'flex flex-col h-auto w-30 py-4 my-2 border border-gray-600 bg-gray-800 hover:bg-gray-700'}
                >
                    <SearchIcon className="size-5 text-green-500"/>
                    <span>Search</span>
                </Button>
            </div>

            <Separator />
            <div>
                <span className="font-semibold text-sm text-gray-400 mx-4 mt-1">{workspaceDetails?.members.length} members</span>
                {workspaceDetails?.members.map((member)=>{
                    return(
                        <>
                            <div 
                                className="flex items-center text-white my-2 hover:bg-gray-700 cursor-pointer py-2 mx-2 rounded-md"
                                key={member?.memberId?._id}
                            >
                                <img 
                                    className="w-10 h-10"
                                    src={member?.memberId?.avatar}
                                />
                                <span className="font-semibold mx-4">{member?.memberId?.username}</span>
                                <span className="ml-auto text-xs mr-4 text-green-500">{member.role === 'admin' ? 'admin' : null}</span>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
}