import { createWorkspace } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation } from "@tanstack/react-query";

export function useCreateWorkspace(){
    const {auth} = useAuth()

    const { isPending,isSuccess,error,mutateAsync : createWorkspaceMutation } = useMutation({
        mutationFn : (data)=>{
            console.log("Data at mutation fn : ",data);
            createWorkspace({...data,token : auth?.token})
        },
        onSuccess : (response)=>{
            console.log("Successfully created workspace : ",response?.data)
        },
        onError : (error)=>{
            console.log("Error creating workspace at useCreateWorkspace : ",error)
        }   
    })

    return {
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    }
}