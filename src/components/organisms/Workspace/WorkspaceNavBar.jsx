import { AddFriendsModal } from "@/components/molecules/Friendship/AddFriendsModal"
import { Button } from "@/components/ui/button"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { InfoIcon, LucideLoader2, SearchIcon, UserPlus2Icon } from "lucide-react"
import { useState } from "react"

export const WorkspaceNavBar = ()=>{

    // const { isPending,workspaceDetails } = useGetWorkspaceDetails()
    const [openAddFriendsModal,setOpenAddFriendsModal] = useState(false);
    //console.log("workspace details at navbar : ",workspaceDetails)
    // if(isPending){
    //     return(
    //         <LucideLoader2 className="animate-spin ml-2" />
    //     )
    // }
    return(
        <>
        <AddFriendsModal 
            open={openAddFriendsModal}
            setOpen={setOpenAddFriendsModal}
        />
        <nav 
            className="bg-gray-900 w-screen h-10 flex items-center justify-center p-1.5"
        >
            <div className="w-1/3" />
            <div className="flex itmes-center">
                <Button 
                    size="sm"
                    className='bg-accent/25 hover:bg-accent/15 h-7 px-2'
                >
                    <SearchIcon className="size-5 text-white mr-2"/>
                    <span className="text-white text-xs">
                        Search 
                    </span>
                </Button>

                <Button 
                    onClick={()=>setOpenAddFriendsModal(true)}
                    size="sm"
                    className='ml-4 bg-accent/25 hover:bg-accent/15 h-7 px-2 cursor-pointer'
                >
                        <UserPlus2Icon className="size-5 text-white "/>
                    <span className="text-white text-sm">Add Friends</span>
                </Button>
            </div>
            
        
            <div className="ml-auto flex items-center justify-end mr-3">
                <Button 
                    variant="transparent"
                    size="iconSm"
                >
                    <InfoIcon className="size-5 text-white"/>
                </Button>
            </div>
        </nav>
        </>
    )
}