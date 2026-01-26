import { deleteWorkspace } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useDeleteWorkspace(){

    const { workspaceId } = useParams()
    const { auth } = useAuth()

    const {isSuccess,isPending,mutateAsync : deleteWorkspaceMutate ,error} = useMutation({
        mutationFn : ()=>deleteWorkspace({workspaceId,toekn : auth?.token}),
        onSuccess : (response)=>{
            console.log("Deleted successfully : ",response)
        },
        onError : (error)=>{
            console.log("Error while deleting the workspace : ",error);
        }
    })

    return {
        deleteWorkspaceMutate,
        isSuccess,
        isPending,
        error
    }
}