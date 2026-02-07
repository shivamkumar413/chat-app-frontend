import { Button } from "@/components/ui/button"
import { useCreateWorkspaceModal } from "@/hooks/context/CreateWorkspaceModalHook"
import { PencilIcon, UserPlus2Icon } from "lucide-react"

export const WorkspaceRightPanel = ()=>{

    const { setIsCreateWorkspaceModalOpen } = useCreateWorkspaceModal()

    function handleCreateWorkspaceModal(){
        setIsCreateWorkspaceModalOpen(true);
    }

    return(
        <div className="w-full h-full bg-gray-900 flex justify-center items-center">
            <div className="flex gap-x-5">
                <Button
                    className={'bg-gray-600 border-none hover:bg-gray-900 flex flex-col h-auto cursor-pointer'}
                    onClick={handleCreateWorkspaceModal}
                >
                    <PencilIcon className="size-6 text-gray-200"/>
                    <span>
                        Create Workspace
                    </span>
                </Button>

                <Button
                    className={'bg-gray-600 border-none hover:bg-gray-900 flex flex-col h-auto cursor-pointer'}
                >
                    <UserPlus2Icon className="size-6 text-gray-200" />
                    <span>
                        Add Friend
                    </span>
                </Button>

                <Button
                    className={'bg-gray-600 border-none hover:bg-gray-900 flex flex-col h-auto cursor-pointer'}
                >
                    <img 
                        className="size-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/500px-Google_Gemini_icon_2025.svg.png" alt="" />
                    <span>
                        Ask Gemini
                    </span>
                </Button>
            </div>
        </div>
    )
}