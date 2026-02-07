import { addMemberToWorkspaceByJoinCode } from "@/apis/workspace";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useAddMemberToWorkspaceByJoinCode(){
    const {isPending,isSuccess,mutateAsync : addMemberToWorkspaceMutation,error} = useMutation({
        mutationFn : addMemberToWorkspaceByJoinCode,
        onSuccess : ()=>{
            toast.success("Successfully added to workspace");
        },
        onError : ()=>{
            toast.error("Some exception occured")
        }
    })

    return {
        isPending,
        isSuccess,
        addMemberToWorkspaceMutation,
        error
    }
}