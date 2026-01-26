import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCreateWorkspace } from "@/hooks/apis/workspace/useCreateWorkspace"
import { useCreateWorkspaceModal } from "@/hooks/context/CreateWorkspaceModalHook"
import { DialogDescription } from "@/components/ui/dialog" 
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"


export const CreateWorkspaceModal = ()=>{

    const [workspaceName,setWorkspaceName] = useState('')
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { isCreateWorkspaceModalOpen, setIsCreateWorkspaceModalOpen } = useCreateWorkspaceModal()
    const { createWorkspaceMutation } = useCreateWorkspace()

    function handleOpenChange(){
        setIsCreateWorkspaceModalOpen(false)
    }


    async function handleCreateWorkspaceSubmit(e){
        //e.preventDefault()
        try {
            console.log("Inside handle fn")
            console.log("wsname at handle form fn : ",workspaceName)
            const workspace = await createWorkspaceMutation({workspaceName : workspaceName});
            console.log("Newly created workspace : ",workspace)
        } catch (error) {
            console.log(error)
            throw error
        }finally{
            queryClient.invalidateQueries('fetchworkspaces')
            navigate('/home')
            setIsCreateWorkspaceModalOpen(false)
            setWorkspaceName('')
        }
    }
    return(
        <Dialog 
            open={isCreateWorkspaceModalOpen}
            onOpenChange={handleOpenChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <form 
                    onSubmit={(e)=>handleCreateWorkspaceSubmit(e)}
                >
                    <Input 
                        type={"text"}
                        value={workspaceName}
                        placeholder="Add the name of the workspace e.g. Dev Workspace, DSA workspace"
                        required
                        onChange={(e)=>setWorkspaceName(e.target.value)}
                    />

                    <Button
                        className={'w-full mt-5'}
                        size="lg"
                    >
                        Create
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}