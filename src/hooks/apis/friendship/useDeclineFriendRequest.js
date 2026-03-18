import { declineFriendRequest } from "@/apis/friendship";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeclineFriendRequest(){
    const {auth} = useAuth();

    const {mutateAsync : declineFriendRequestMutation,isPending,isSuccess,error} = useMutation({
        mutationFn : (param)=>declineFriendRequest({...param,token : auth?.token}),
        onSuccess : (data)=>{
            toast.success("declined friend request")
        },
        onError : (error)=>{
            toast.error("error while declining friend request")
        }
    })

    return{
        declineFriendRequestMutation,
        isPending,
        isSuccess,
        error
    }
}