import { UserButton } from "@/components/atoms/userButton/UserButton"
import { Button } from "@/components/ui/button"
import { useGetAllWorkspace } from "@/hooks/apis/query/useGetAllWorkspace"
import { useEffect } from "react"

export const Home = ()=>{

    const {isPending,isSuccess,data} = useGetAllWorkspace()
    
    useEffect(()=>{
        if(isPending) return
        else{
            console.log(data)
        }
    },[isSuccess])
    
    
    
    return(
        <>
            <div>Home</div>
            <UserButton />
        </>
    )
}