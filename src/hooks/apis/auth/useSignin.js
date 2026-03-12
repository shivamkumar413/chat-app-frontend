import { useMutation } from "@tanstack/react-query";
import { userSignin } from "@/apis/auth/index.js";
import { toast } from "sonner";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useSocketHook } from "@/hooks/context/useSocketHook";

export const useSignin = ()=>{
    const {loginSocket} = useSocketHook()
    const {setAuth} = useAuth()
    const { isSuccess,isPending,error,mutateAsync : signinMutation} = useMutation({
        mutationFn : userSignin,
        onSuccess : async (response)=>{
            setAuth({
                user : response.data.data,
                token : response.data.data.token,
                isLoading : false,
            })
            toast.success("User sign in successfull")
            console.log("Successfully logged in ",response.data)
            const data = JSON.stringify(response.data.data)
            const token = JSON.stringify(response.data.data.token)
            localStorage.setItem('user',data)
            localStorage.setItem('token',token)
            await loginSocket({userId : response.data.data._id});
        },
        onError : (error)=>{
            toast.error(error.message)
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