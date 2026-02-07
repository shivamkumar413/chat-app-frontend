import { Button } from "@/components/ui/button"
import { useAddMemberToWorkspaceByJoinCode } from "@/hooks/apis/workspace/useAddMemberToWorkspaceByJoincode"
import { useAuth } from "@/hooks/context/AuthContextHook"
import { Link, useNavigate, useParams } from "react-router-dom"
import VerificationInput from "react-verification-input"

export const JoinWorkspace = ()=>{

    const { workspaceId } = useParams();
    const { auth } = useAuth()
    const navigate = useNavigate()
    const { isPending,isSuccess,addMemberToWorkspaceMutation,error } = useAddMemberToWorkspaceByJoinCode()

    async function handleAddMemberToWorkspace(joinCode){
        
        console.log("Join code at join ws page : ",joinCode);
        try {
            await addMemberToWorkspaceMutation({workspaceId,joinCode,token : auth?.token})
            navigate(`/workspace/${workspaceId}`);
            
        } catch (error) {
            console.log("Error in adding member to ws : ",error)
        }
    }

    return(
        <div 
            className="h-screen flex flex-col items-center justify-center"
        >
            <div
                className="flex flex-col items-center gapy-4"
            >

            
                <div
                    className="flex flex-col items-center gap-y-2"
                >
                    <h1
                        className="font-bold text-3xl"
                    >
                        Join Workspace
                    </h1>

                    <p>
                        Enter the code you recieved to join the workspace
                    </p>
                </div>

                <VerificationInput 
                    onComplete={handleAddMemberToWorkspace}
                    length={7}
                    classNames={{
                        container : "flex gap-x-2",
                        character : 'h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
                        characterInactive : 'bg-muted',
                        characterFilled: 'bg-white text-black',
                        characterSelected: 'bg-white text-black',
                    }}
                />
            </div>

            <div
                className='flex my-4'
            >
                <Button size="lg" variant="outline" >
                    <Link to={`/workspaces/${workspaceId}`}>
                        Back to the workspace
                    </Link>
                </Button>
            </div>
        </div>
    )
}