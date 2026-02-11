import ChannelMessageContext from "@/context/ChannelMessage";
import { useContext } from "react";

export function useChannelMessage(){
    return useContext(ChannelMessageContext)
}