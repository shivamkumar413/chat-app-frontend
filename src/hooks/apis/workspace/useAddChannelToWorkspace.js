import { addChannelToWorkspace } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useAddChannelToWorkspace(){

    const {auth} = useAuth()

    console.log("Add channel workspace hook triggered ");

    const {isSuccess,isPending,mutateAsync : AddChannelToWorkspaceMutate,error} = useMutation({
        mutationFn : (data)=>addChannelToWorkspace({...data,token : auth?.token}),
        onSuccess : (data)=>{
            console.log("Added channel to workspace : ",data)
            toast.success("Added channel to workspace")
        },
        onError : (error)=>{
            console.log("Error while adding channel to workspace : ",error);
            toast.error("Error while adding channel to workspace ");
        }
    })

    return {
        isPending,
        isSuccess,
        AddChannelToWorkspaceMutate,
        error
    }
}