import { useAuth } from "@/hooks/context/AuthContextHook"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children})=>{
    const { auth } = useAuth()

    if(auth.isLoading){
        return <div>Loading...</div>
    }

    if(!auth.user || !auth.token){
        return <Navigate to='/auth/signin' />
    }

    return children
}