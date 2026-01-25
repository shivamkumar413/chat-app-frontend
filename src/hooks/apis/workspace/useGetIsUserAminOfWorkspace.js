import { getIsUserAdminOfWorkspace } from "@/apis/workspace";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetIsUserAdminOfWorkspace(){

    const { workspaceId } = useParams()
    const { auth } = useAuth()

    const {isFetching,isSuccess,data : IsUserAdminOfWs,error} = useQuery({
        queryFn : ()=>getIsUserAdminOfWorkspace({workspaceId : workspaceId,token : auth?.token}),
        queryKey : [`isUserAmin-${workspaceId}`]
    })

    return {
        IsUserAdminOfWs,
        isFetching,
        isSuccess,
        error
    }
}