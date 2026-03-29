import videocallContext from "@/context/VideoCallingContext";
import { useContext } from "react";

export function useVideoCallContext(){
    return useContext(videocallContext)
}