import { useMutation } from "@tanstack/react-query";
import { userSignin } from "@/apis/auth/index.js";

export const useSignin = async ()=>{
    const { isSuccess,isPending,error,mutate : signinMutation} = useMutation({
        mutationFn : userSignin,
        onSuccess : (data)=>{
            console.log("Successfully logged in ",data)
        },
        onError : (error)=>{
            console.log(`Failed to signin ${error}`)
        }
    })

    return {
        isSuccess,
        isPending,
        error,
        signinMutation
    }

}