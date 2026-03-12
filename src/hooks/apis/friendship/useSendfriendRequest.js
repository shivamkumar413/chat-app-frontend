import { sendFriendRequest } from "@/apis/friendship";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSendfriendRequest(){


    const {mutateAsync : sendFriendReqMutation,isPending,isSuccess,error} = useMutation({
        mutationFn : sendFriendRequest,
        onSuccess : async (data)=>{
            toast.success("Friend request successfull")
        },
        onError : ()=>{
            toast.error("Try again in some time")
        }
    })

    return{
        sendFriendReqMutation,
        isPending,
        isSuccess,
        error
    }
}