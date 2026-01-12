import { useMutation } from "@tanstack/react-query"
import { userSignup } from "@/apis/auth/index.js"

export function useSignup(){
    const {isPending,isSuccess,error,mutate : signupMutation} = useMutation({
        mutationFn : userSignup,
        onSuccess : (data)=>{
            console.log("Successfully signed up ",data);
        },
        onError : (error)=>{
            console.log("Error in sign up ",error);
        }
    })

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    }
}



