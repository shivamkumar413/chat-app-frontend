import { deleteMessage } from "@/apis/message";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteMessage(){

    const {auth} = useAuth();

    const {mutateAsync : deleteMessageMutation,error,isSuccess,isPending} = useMutation({
        mutationFn : (param)=>deleteMessage({...param,token : auth?.token}),
        onSuccess : (data)=>{
            console.log("successfully deleted message")
            toast.success("Succesfully deleted the message")
        },
        onError : (error)=>{
            toast.error("Error while deleting the message")
        }
    })

    return{
        deleteMessageMutation,
        error,
        isSuccess,
        isPending
    }
}