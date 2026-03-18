import { FriendshipListChip } from "@/components/atoms/Friendship/FriendshipListChip"
import { WorkspaceNavBar } from "@/components/organisms/Workspace/WorkspaceNavBar"
import { WorkspaceSideBar } from "@/components/organisms/Workspace/WorkspaceSideBar"
import { Button } from "@/components/ui/button"
import { useAcceptFriendRequest } from "@/hooks/apis/friendship/useAcceptFriendRequest"
import { useDeclineFriendRequest } from "@/hooks/apis/friendship/useDeclineFriendRequest"
import { useGetallRecievedFriendRequest } from "@/hooks/apis/friendship/useGetAllRecievedFriendRequest"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export const Request = ()=>{

    const { data : recievedFriendRequest,error,isPending,isSuccess } = useGetallRecievedFriendRequest()
    console.log("data at get all recieved friend request : ",recievedFriendRequest);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { acceptFriendRequestMutation } = useAcceptFriendRequest();
    const { declineFriendRequestMutation } = useDeclineFriendRequest()

    async function handleAcceptFriendRequest(friendshipId){
        try {
            await acceptFriendRequestMutation({
                friendshipId : friendshipId
            })
            queryClient.invalidateQueries('fetchallrecievedfriendrequest')
        } catch (error) {
            throw error;
        }
    }

    async function handleDeclineFriendRequest(friendshipId){
        try {
            await declineFriendRequestMutation({
                friendRequestId : friendshipId
            })
            queryClient.invalidateQueries('fetchallrecievedfriendrequest')
        } catch (error) {
            throw error;
        }
    }
    
    return(
        <div className="h-screen overflow-hidden flex">
            <WorkspaceSideBar />

            <div className="w-screen bg-gray-700">
            <div 
                className="mb-2"
            >
                <WorkspaceNavBar />
            </div>
            
            <span 
                onClick={()=>navigate('/requests/recieved')}
                className="border-b text-xl border-green-700 mx-2 cursor-pointer px-2 hover:border-blue-500"
            >
                Recieved
            </span>

            <span
                onClick={()=>navigate('/requests/sent')}
                className="border-b text-xl border-black mx-2 cursor-pointer px-2 hover:border-blue-500"
            >
                Sent
            </span>

            <div className="mt-2">
                {recievedFriendRequest?.map((req)=>{
                    return(
                        <div 
                            id={req?._id}
                            className="flex items-center gap-2 mx-5"
                        >
                            <FriendshipListChip 
                                imgSrc={req?.requester.avatar}
                                username={req?.requester.username}
                            />

                            <Button 
                                variant="outline"
                                onClick={()=>handleDeclineFriendRequest(req?._id)}
                            >
                                    Decline
                            </Button>
                            <Button 
                                onClick={()=>handleAcceptFriendRequest(req?._id)}
                                className={'bg-gray-800'}
                            >
                                    Accept
                            </Button>
                        </div>
                    )
                })}

            </div>

            </div>
        </div>
    )
}
