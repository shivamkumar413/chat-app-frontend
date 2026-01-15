import { useMutation } from "@tanstack/react-query"
import { userSignup } from "@/apis/auth/index.js"
import { toast } from "sonner";

export function useSignup(){
    const {isPending,isSuccess,error,mutateAsync : signupMutation} = useMutation({
        mutationFn : userSignup,
        onSuccess : (data)=>{
            toast.success("user signup successful")
            console.log("Successfully signed up ",data);
        },
        onError : (error)=>{
            console.log("Error in sign up ",error);
            toast.error(error.message)
        }
    })

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    }
}



