import CreateChannelModalContext from "@/context/createChannelModalContext";
import { useContext } from "react";

export function useCreateChannelModalHook(){
    return useContext(CreateChannelModalContext)
}