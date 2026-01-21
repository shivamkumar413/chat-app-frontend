import createWorkspaceContext from "@/context/createWorkspaceModalContext";
import { useContext } from "react";

export function useCreateWorkspaceModal(){
    return useContext(createWorkspaceContext)
}