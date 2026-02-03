import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useAddChannelToWorkspace } from "@/hooks/apis/workspace/useAddChannelToWorkspace"
import { useCreateChannelModalHook } from "@/hooks/context/CreateChannelModalHook"
import { useWorkspacePanelPreferencesHook } from "@/hooks/context/WorkspacePanelPreferencesHook"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const CreateChannelModal = ()=>{

    const { isCreateChannelModalOpen,SetIsCreateChannelModalOpen } = useCreateChannelModalHook()
    const [channelNameValue,setChannelNameValue] = useState('')
    const queryClient = useQueryClient()
    const { isSuccess,isPending,AddChannelToWorkspaceMutate,error } = useAddChannelToWorkspace()
    const { workspaceId } = useWorkspacePanelPreferencesHook()
 
    function handleModalOpenChange(){
        SetIsCreateChannelModalOpen(false)
    }

    async function handleFormSubmit(e){
        e.preventDefault()
        await AddChannelToWorkspaceMutate({workspaceId,channelName : channelNameValue})
        queryClient.invalidateQueries(`workspaceById-${workspaceId}`)
        SetIsCreateChannelModalOpen(false)
        setChannelNameValue('')
    }

    return(
        <>  
            <Dialog 
                open = {isCreateChannelModalOpen}
                onOpenChange={handleModalOpenChange}
            >
                <DialogContent>
                    <DialogHeader>
                        Name the channel
                    </DialogHeader>
                    <DialogDescription>
                        Channel name    
                    </DialogDescription>

                    <form onSubmit={handleFormSubmit}>
                        <Input 
                            type={'text'}
                            placeholder='Name of the channel e.g. notes, discussion room'
                            value={channelNameValue}
                            onChange={(e)=>setChannelNameValue(e.target.value)}
                        />
                        <div className="flex justify-end mx-2 mt-2 gap-2">
                            <DialogClose>
                                <Button
                                    variant={'outline'}
                                >
                                    Cancel
                                </Button>
                            </DialogClose>

                            <Button>
                                Create
                            </Button>
                        </div>
                    </form>

                </DialogContent>
            </Dialog>
        </>
    )
}