import { WorkspaceSideBar } from "@/components/organisms/Workspace/WorkspaceSideBar"

export const RequestSent = ()=>{
    return(
        <div className="h-screen overflow-hidden flex">
            <WorkspaceSideBar />

            <div className="w-screen mx-5">
            
            <span 
                className="border-b text-xl border-black mx-1"
            >
                Recieved
            </span>

            <span
                className="border-b text-xl border-black mx-1"
            >
                Sent
            </span>

            

            </div>
        </div>
    )
}