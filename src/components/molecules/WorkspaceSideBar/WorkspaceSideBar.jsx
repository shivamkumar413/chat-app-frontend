import { UserButton } from "@/components/atoms/userButton/UserButton"
import { WorkspaceSideBarButton } from "@/components/atoms/WorkspaceSideBarButton/WorkspaceSidebarButton"
import { EllipsisIcon, Home, MessageCircleMore } from "lucide-react"

export const WorkspaceSideBar = ()=>{
    return(
        <>
            <aside className="h-full bg-red-300 w-20 flex flex-col items-center justify-between">
                <div>
                    <WorkspaceSideBarButton 
                        Icon={Home}
                        name={"Home"}
                    />

                    <WorkspaceSideBarButton 
                        Icon={MessageCircleMore}
                        name={"DM's"}
                    />

                    <WorkspaceSideBarButton 
                        Icon={EllipsisIcon}
                        name={"More"}
                    />
                </div>
                
                <div className="my-3">
                    <UserButton />
                </div>
                

            </aside>
        </>
    )
}

