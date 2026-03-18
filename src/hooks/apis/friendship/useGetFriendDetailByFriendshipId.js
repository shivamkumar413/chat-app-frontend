import { getFriendDetailByfriendshipId } from "@/apis/friendship";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetFriendDetailByFriendshipId(){

    const { friendshipId } = useParams();
    const { auth } = useAuth();

    const { data : friendDetail,isPending : isPendingFriendDetail,isSuccess : isSuccessFriendDetail, error : errorFriendDetail } = useQuery({
        queryFn : ()=>getFriendDetailByfriendshipId({friendshipId : friendshipId,token : auth?.token}),
        queryKey : ['getfrienddetailbyfriendshipid'],
        staleTime : 60000,
    })

    return{
        friendDetail,
        isPendingFriendDetail,
        isSuccessFriendDetail,
        errorFriendDetail,
    }
}