import { getDirectChatMessage } from "@/apis/message";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetDirectChatMessages(){
        const {friendshipId} = useParams();
        const {auth} = useAuth();
        const {
            data : directChatMessages,
            isPending : directChatispending,
            isSuccess : directChatisSuccess,
            error : directChatError
        } = useQuery({
            queryFn : ()=>getDirectChatMessage({friendshipId : friendshipId,token : auth?.token}),
            queryKey : [`directchatmessage-${friendshipId}`],
            staleTime : 10000
        })
    
    return{
        directChatMessages,
        directChatispending,
        directChatisSuccess,
        directChatError
    }    
    
}