import { DirectMessageUserChip } from "@/components/atoms/DirectMessage/DirectMessageUserChip";
import { useGetAllFriends } from "@/hooks/apis/friendship/useGetAllFriends"
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useNavigate } from "react-router-dom";

export const DirectMessageLeftPanel = ()=>{

    const {allFriends,isPending,isSuccess,error} = useGetAllFriends();
    const {auth} = useAuth();
    const navigate = useNavigate()
    console.log("all frnds : ",allFriends)
    
    return(
        <>
            {allFriends?.map((friend)=>{
                if(friend.requester._id === auth?.user?._id){
                    return(
                        <div
                            onClick={()=>navigate(`/dm/${friend?._id}`)}
                        >
                            <DirectMessageUserChip 
                                avatarSrc={friend.recipient.avatar}
                                username={friend?.recipient.username}
                            />
                            
                        </div>
                    )
                }
                return(
                    <div
                        onClick={()=>navigate(`/dm/${friend?._id}`)}
                    >
                        <DirectMessageUserChip 
                            avatarSrc={friend?.requester.avatar}
                            username={friend?.requester.username}
                        />
                        
                    </div>
                )
            })}
        </>
    )
}