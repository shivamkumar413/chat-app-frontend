import { useEffect, useState } from "react"
import { SignupCard } from "./SignupCard"
import { useSignup } from "@/hooks/apis/mutations/useSignup"
import { useNavigate } from "react-router-dom"

export const SignupCardContainer = ()=>{
    const [signupForm,setSignupForm] = useState({
        email : '',
        password : '',
        confirmPassword : '',
        username : ''
    })

    const navigate = useNavigate()
    const [validationError,setValidationError] = useState(null)
    const { isPending,isSuccess,error,signupMutation } = useSignup()

    async function onSignupSubmit(e){
        e.preventDefault()
        if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username){
            console.log("Each field is required");
            setValidationError({message : "Please fill all the fields"})
            return;
        }

        if(signupForm.password !== signupForm.confirmPassword){
            console.log("Password do not match")
            setValidationError({message : "Passwords do not match"})
            return;
        }

        setValidationError(null)

        await signupMutation({
            email : signupForm.email,
            password : signupForm.password,
            username : signupForm.username
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            if(isSuccess){
                navigate('/auth/signin')
            }
        },3000)
    },[isSuccess])

    return(
        <SignupCard 
            signupForm={signupForm} 
            setSignupForm={setSignupForm}
            validationError={validationError}
            onSignupSubmit={onSignupSubmit}
            isPending={isPending}
            isSuccess={isSuccess}
            error={error}
        />
    )
}
