import { UserButton } from "@/components/atoms/userButton/UserButton"
import { WorkspaceSideBarButton } from "@/components/molecules/Workspace/WorkspaceSidebarButton"
import { BellIcon, EllipsisIcon, HandshakeIcon, Home, MessageCircleMore } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { WorkspaceSwitcher } from "./WorkspaceSwithcher"

export const WorkspaceSideBar = ()=>{

    const navigate = useNavigate()
    //const { workspaceId } = useParams()

    function handleRequestNavigateClick(){
        navigate('/requests/recieved')
    }

    return(
        <>
            <aside className="h-full bg-gray-900 text-gray-300 w-20 flex flex-col items-center ">
                {/* <div className="my-2 w-25  flex items-center justify-center">
                    <WorkspaceSwitcher />
                </div> */}
                

                    <WorkspaceSideBarButton 
                        Icon={Home}
                        name={"Home"}
                        onClickHandler={()=>navigate('/home')}
                    />

                    <WorkspaceSideBarButton 
                        Icon={MessageCircleMore}
                        name={"DM's"}
                    />

                    <WorkspaceSideBarButton
                        Icon={BellIcon}
                        name={"Notifications"}
                    />

                    <WorkspaceSideBarButton 
                        Icon={HandshakeIcon}
                        name={"Requests"}
                        onClickHandler={handleRequestNavigateClick}
                    />

                    <WorkspaceSideBarButton 
                        Icon={EllipsisIcon}
                        name={"More"}
                    />
                
                
                <div 
                    className="mt-auto"    
                >
                    <UserButton />
                </div>
                

            </aside>
        </>
    )
}

