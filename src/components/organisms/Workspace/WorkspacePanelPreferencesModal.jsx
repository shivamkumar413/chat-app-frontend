import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog"
import { useWorkspacePanelPreferencesHook } from "@/hooks/context/WorkspacePanelPreferencesHook"
import { DeleteIcon, LucideDelete, SquarePenIcon, Trash2Icon } from "lucide-react";

export const WorkpacePanelPreferencesModal = ()=>{

    const { openPreferencesModal,setOpenPreferencesModal } = useWorkspacePanelPreferencesHook()

    function handleModalOpenChange(){
        setOpenPreferencesModal(false);
    }

    return(
        <Dialog
            open={openPreferencesModal}
            onOpenChange={handleModalOpenChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogHeader>

                    </DialogHeader>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>

                <div className="flex w-full bg-gray-100 py-3 rounded-md justify-between items-center px-2">
                    <p className="text-sm font-semibold">Edit Workspace</p>

                    <SquarePenIcon className="text-xs"/>
                </div>

                <div className="flex w-full bg-gray-100 py-3 rounded-md justify-between items-center px-2">
                    <p className="text-sm font-semibold">Delete Workspace</p>

                    <Trash2Icon className="text-xs"/>
                </div>
            </DialogContent>
        </Dialog>
    )
}