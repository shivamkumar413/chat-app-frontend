import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useDeleteWorkspace } from "@/hooks/apis/workspace/useDeleteWorkspace";
import { useUpdateWorkspace } from "@/hooks/apis/workspace/useUpdateWorkspace";
import { useWorkspacePanelPreferencesHook } from "@/hooks/context/WorkspacePanelPreferencesHook"
import { useQueryClient } from "@tanstack/react-query";
import { SquarePenIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const WorkpacePanelPreferencesModal = ()=>{

    const { openPreferencesModal,setOpenPreferencesModal,workspaceName,workspaceId } = useWorkspacePanelPreferencesHook()
    const [wsName,setWsName] = useState(workspaceName)
    const [dialogOpen,setDialogOpen] = useState(false)
    //console.log("ws id at wspanel preferneces : ",workspaceName)
    console.log("wsname at top : ",wsName)

    const { deleteWorkspaceMutate,isSuccess,isPending } = useDeleteWorkspace(workspaceId)
    const { updateWorkspaceMutate } = useUpdateWorkspace()
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    function handleModalOpenChange(){
        setOpenPreferencesModal(false);
    }

    function handleDialogOpen(){
        setDialogOpen(false)
    }

    async function handleDelete(){ 
        await deleteWorkspaceMutate()
        queryClient.invalidateQueries('fetchworkspaces')
        setOpenPreferencesModal(false)
        navigate('/home')
        toast.success("Workspace deleted successfully")
    }

    async function handleFormSubmit(e){
        e.preventDefault()
        try {
            const response = await updateWorkspaceMutate({workspaceId,workspaceName : wsName})
            queryClient.invalidateQueries(`workspaceById-${workspaceId}`)
            queryClient.invalidateQueries('fetchworkspaces')
            navigate('/home')
            setDialogOpen(false)
            setOpenPreferencesModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Dialog
            open={openPreferencesModal}
            onOpenChange={handleModalOpenChange}
        >
            <DialogContent>
                {/* <DialogHeader>
                    <DialogHeader>

                    </DialogHeader>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader> */}

                <Dialog open={dialogOpen}>
                    <DialogTrigger onClick={()=>setDialogOpen(true)}>
                        <div className="flex w-full bg-gray-100 py-3 rounded-md justify-between items-center px-2">
                            <div>
                                <p className="text-sm font-semibold">Edit Workspace</p>
                                <p className="text-xs">{workspaceName}</p>
                            </div>
                            
                            <SquarePenIcon className="text-xs"/>
                        </div>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogDescription>
                            Edit name of the workspace
                        </DialogDescription>

                        <form onSubmit={handleFormSubmit}>
                            <Input 
                                type={'text'}
                                placeholder='Edit name of workspace. e.g.DEV workspace'
                                value={wsName}
                                onChange={(e)=>{
                                    console.log("wsname :",wsName)
                                    setWsName(e.target.value)}
                                }
                            />

                            <div className="flex justify-end mt-4 gap-x-2">
                                <DialogClose>
                                <Button variant="outline">
                                    Cancel
                                </Button>
                                </DialogClose>

                                <Button>
                                    Change
                                </Button>
                            </div>

                        </form>
                    </DialogContent>
                </Dialog>
                 
                
                <div 
                    className="flex w-full bg-gray-100 py-3 rounded-md justify-between items-center px-2 cursor-pointer"
                    onClick={handleDelete}
                >
                    <p  
                        className="text-sm font-semibold"
                    >
                            Delete Workspace
                    
                    </p>

                    <Trash2Icon className="text-xs"/>
                </div>
            </DialogContent>
        </Dialog>
    )
}