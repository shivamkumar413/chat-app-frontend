import { deleteWorkspace } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation } from "@tanstack/react-query";

export function useDeleteWorkspace(workspaceId){

    const { auth } = useAuth()
    
    // console.log("")
    console.log("Delete workspace triggered with workspace id : ",workspaceId)

    const {isSuccess,isPending,mutateAsync : deleteWorkspaceMutate ,error} = useMutation({
        mutationFn : ()=>deleteWorkspace({workspaceId,token : auth?.token}),
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