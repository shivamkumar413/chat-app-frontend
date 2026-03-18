import { useSocketHook } from "@/hooks/context/useSocketHook";
import { useParams } from "react-router-dom";

export const DirectMessageRightPanel = ()=>{

    const {friendshipId} = useParams();
    const {joinDirectChatRoom} = useSocketHook();



    return(
        <>
            DM right panel
        </>
    )
}