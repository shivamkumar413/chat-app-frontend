import { Button } from "@/components/ui/button"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import {  Pencil, SearchIcon, UserPlus2Icon, X } from "lucide-react"

export const WorkspaceDetailModal = ({workspaceModalOpen,setWorkspaceModalOpen})=>{

    const { workspaceDetails } = useGetWorkspaceDetails()

    return(
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
                        <span className="ml-43 text-xl ">{workspaceDetails?.name}</span>
                        <Pencil className="ml-auto mr-4 size-4 cursor-pointer"/> 
                    </div>
                    
                    <div>
                        <span className="text-sm">workspace</span>
                        <span className="text-green-500 ml-2 text-sm">{workspaceDetails?.members.length} members</span>
                    </div>
                    
                </div>
                
            </div>

            <div className="flex items-center justify-center w-full gap-x-2 my-1">
                <Button
                    className={'flex flex-col h-auto w-30 py-4 my-2 border border-gray-600 bg-gray-800 hover:bg-gray-700'}
                >
                    <UserPlus2Icon className="size-5 text-green-500"/>
                    <span>Add</span>
                </Button>

                <Button
                    className={'flex flex-col h-auto w-30 py-4 my-2 border border-gray-600 bg-gray-800 hover:bg-gray-700'}
                >
                    <SearchIcon className="size-5 text-green-500"/>
                    <span>Search</span>
                </Button>
            </div>
        </div>
    )
}