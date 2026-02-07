import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useGetWorkspaceDetails } from "@/hooks/apis/workspace/useGetWorkspaceDetails"
import { Copy, MailIcon, PaperclipIcon, QrCodeIcon, SearchIcon } from "lucide-react"
import { toast } from "sonner"

export const AddUserToWorkspaceModal = ({open,setOpen})=>{

    const { workspaceDetails } = useGetWorkspaceDetails()
    console.log("workspace details at add user ws modal :",workspaceDetails)
    async function handleCopyClipboard(){
        // console.log("Handled copy clipboard")
        await navigator.clipboard.writeText(workspaceDetails?.joinCode)
        //console.log("Navigator clipboard : ",Navigator.clipboard);
        // console.log(ele);
        //console.log(await navigator.clipboard.readText())
        toast.success("Join code copied to clipboard")
    }

    console.log("open at add user modal : ",open)
    return(
        <>
            <Dialog
                open={open}
                onOpenChange={()=>setOpen(!open)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Invite People to workspace
                        </DialogTitle>
                    </DialogHeader>

                    <div className="flex justify-center items-center my-2 gap-x-2">
                        <Button
                            variant="outline"
                        >
                            <PaperclipIcon className="size-6"/>
                        </Button>

                        <Button
                            variant="outline"
                        >
                            <MailIcon className="size-6"/>
                        </Button>

                        <Button
                            variant="outline"
                        >
                            <QrCodeIcon className="size-6"/>
                        </Button>

                        <Dialog>
                            <DialogTrigger>
                                <Button 
                                    variant="outline"
                                >
                                    JOIN CODE
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Share Join Code with friend to add them to Workspace
                                    </DialogTitle>
                                </DialogHeader>

                                <div className="flex justify-center items-center">
                                    <Button variant="outline">{workspaceDetails?.joinCode}</Button>
                                    <Copy 
                                        className="mx-2 size-5 cursor-pointer" 
                                        onClick={handleCopyClipboard}
                                    />
                                </div>

                                <a 
                                    className="flex items-center justify-center text-blue-700"
                                    href={`http://localhost:5173/workspace/join/${workspaceDetails?._id}`}
                                >
                                    
                                    Redirect to join page
                                </a>
                                
                            </DialogContent>
                        </Dialog>
                        
                    </div>

                    <div className="flex items-center justify-center">

                        <input 
                            type="text"
                            placeholder="@ Search by Username"
                            className="py-1 px-2 rounded-md border border-gray-300"
                        />

                        <span className="mx-1 cursor-pointer"><SearchIcon className="text-gray-600"/></span>
                        
                            
                    </div>
                    
                </DialogContent>
            </Dialog>
        
        
        

        </>
    )
}