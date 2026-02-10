import countdownModalContext from "@/context/countdownModalContext";
import { useContext } from "react";

export function useCountdownModalContextHook(){
    return useContext(countdownModalContext);
}