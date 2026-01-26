import { updateWorkspace } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation } from "@tanstack/react-query";

export function useUpdateWorkspace(){

    const {auth} = useAuth()
    console.log("workspace update triggered")
    const {isSuccess,isPending,mutateAsync : updateWorkspaceMutate,error} = useMutation({
        mutationFn : (data)=>updateWorkspace({...data,token : auth?.token}),
        onSuccess : (data)=>{
            console.log("Successfully updated workspace name : ",data)
        },
        onError : (error)=>{
            console.log("Error while updating workspace name : ",error)
        }
    })

    return{
        isSuccess,
        isPending,
        updateWorkspaceMutate,
        error
    }
}