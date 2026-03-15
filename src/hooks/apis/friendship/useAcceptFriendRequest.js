import { acceptFriendRequest } from "@/apis/friendship";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useAcceptFriendRequest(){

    const { auth } = useAuth();

    const {mutateAsync : acceptFriendRequestMutation,isPending,isSuccess,error} = useMutation({
        mutationFn : (data)=>acceptFriendRequest({...data,token : auth?.token}),
        onSuccess : (data)=>{
            //console.log("Succesfully accepted friend request : ",data);
            toast.success("Succesfully accepted friend request")
        },
        onError : (error)=>{
            console.log("Error while accepting friend request : ",error);
            toast.error("Error while accepting friend request")
        }
    })

    return{
        acceptFriendRequestMutation,
        isPending,
        isSuccess,
        error
    }
}