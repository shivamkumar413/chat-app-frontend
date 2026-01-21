import { useEffect, useState } from "react"
import { SigninCard } from "./SigninCard"
import { useSignin } from "@/hooks/apis/auth/useSignin"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
export const SigninCardContainer = ()=>{

    const [signinForm,setSigninForm] = useState({
        email : '',
        password : ''
    })

    const [validationError,setValidationError] = useState(null)
    
    const { isSuccess,isPending,error,signinMutation } = useSignin();
    const navigate = useNavigate()

    async function onSigninSubmit(e){
        e.preventDefault();
        if(!signinForm.email || !signinForm.password){
            console.log("All fields are required")
            setValidationError({message : 'All fields are required'})
            return;
        }

        setValidationError(null);

        console.log("Before await")
        await signinMutation({
            email : signinForm.email,
            password : signinForm.password
        })

        console.log("After await")
    }

    useEffect(()=>{
        if(isSuccess){
            setTimeout(()=>{
                navigate('/home')
            },3000)
        }
    },[isSuccess])


    return(
        <SigninCard 
            signinForm={signinForm}
            setSigninForm={setSigninForm}
            onSigninSubmit={onSigninSubmit}
            isPending={isPending}
            isSuccess={isSuccess}
            error={error}
            validationError={validationError}
        />
    )
}