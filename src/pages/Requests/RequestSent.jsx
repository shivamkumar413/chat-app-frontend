import { FriendshipListChip } from "@/components/atoms/Friendship/FriendshipListChip";
import { WorkspaceNavBar } from "@/components/organisms/Workspace/WorkspaceNavBar";
import { WorkspaceSideBar } from "@/components/organisms/Workspace/WorkspaceSideBar"
import { useDeclineFriendRequest } from "@/hooks/apis/friendship/useDeclineFriendRequest";
import { useGetAllSentFriendRequest } from "@/hooks/apis/friendship/useGetAllSentFriendRequest"
import { useSendfriendRequest } from "@/hooks/apis/friendship/useSendfriendRequest"
import { useQueryClient } from "@tanstack/react-query";
import { Cross, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RequestSent = ()=>{

    const { sentPendingRequests } = useGetAllSentFriendRequest();
    const navigate = useNavigate();
    const { declineFriendRequestMutation } = useDeclineFriendRequest();
    const queryClient = useQueryClient();
    //console.log('sent pending request  : ',sentPendingRequests); 
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
                className="border-b text-xl border-black mx-2 cursor-pointer px-2 hover:border-blue-500"
            >
                Recieved
            </span>

            <span
                onClick={()=>navigate('/requests/sent')}
                className="border-b text-xl border-green-700 mx-2 cursor-pointer px-2 hover:border-blue-500"
            >
                Sent
            </span>

            <div className="mt-2">
                {
                    sentPendingRequests?.map((req)=>{
                        return(
                            <div
                                key={req?._id}
                                className="flex items-center gap-2 mx-5"
                            >
                                <FriendshipListChip 
                                    imgSrc={req?.recipient.avatar}
                                    username={req?.recipient.username}
                                />

                                <div 
                                    className="bg-white cursor-pointer hover:bg-gray-200 transition-colors rounded-full p-2 border-none "
                                    onClick={()=>handleDeclineFriendRequest(req?._id)}
                                >
                                    <XIcon />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            </div>
        </div>
    )
}