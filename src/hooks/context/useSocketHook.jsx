import SocketContext from "@/context/SocketContext";
import { useContext } from "react";

export function useSocketHook(){
    return useContext(SocketContext);
}