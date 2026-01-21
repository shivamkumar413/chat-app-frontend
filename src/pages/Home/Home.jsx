import { UserButton } from "@/components/atoms/userButton/UserButton"
import { useGetAllWorkspace } from "@/hooks/apis/workspace/useGetAllWorkspace"
import { useCreateWorkspaceModal } from "@/hooks/context/CreateWorkspaceModalHook"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Home = ()=>{

    const {isPending,isSuccess,workspaces} = useGetAllWorkspace()
    const { setIsCreateWorkspaceModalOpen } = useCreateWorkspaceModal()
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(isPending) return

        if(workspaces.length === 0){
            setIsCreateWorkspaceModalOpen(true)
        }else{
            console.log("workspaces at home : ",workspaces)
            navigate(`/workspace/${workspaces[0]._id}`)
        }


    },[isPending,isSuccess])
    
    
    
    return(
        <>
            <div>Home</div>
            <UserButton />
        </>
    )
}