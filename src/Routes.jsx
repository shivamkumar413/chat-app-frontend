import { Route, Routes } from "react-router-dom"
import { Auth } from "@/pages/Auth/Auth"
import { SignupCardContainer } from "@/components/organisms/Auth/SignupCardContainer"
import { SigninCardContainer } from "@/components/organisms/Auth/SigninCardContainer"
import { Notfound } from "@/pages/Notfound/Notfound"
import { Home } from "./pages/Home/Home"
import { ProtectedRoute } from "./components/molecules/ProtectedRoute"
import { WorkspaceLayout } from "./pages/Workspace/Layout"
import { Channel } from "./pages/Workspace/Channel/Channel"
import { JoinWorkspace } from "./pages/JoinWorkspace/JoinWorkspace"
import { WorkspaceRightPanel } from "./components/organisms/Workspace/WorkspaceRightPanel"
import { WorkspacePanel } from "./components/organisms/Workspace/WorkspacePanel"
import { ProfileLeftPanel } from "./components/molecules/Profile/ProfileLeftPanel"
import { ProfileRightPanel } from "./components/atoms/ProfileRightPanel/ProfileRightPanel"
import { SettingRightPanel } from "./components/molecules/Settings/SettingRightPanel"
import { SettingLeftPanel } from "./components/molecules/Settings/SettingLeftPanel"
import { Request } from "./pages/Requests/Request"
import { RequestSent } from "./pages/Requests/RequestSent"


export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/auth/signup" element={ <Auth><SignupCardContainer /></Auth> }/>
            <Route path="/auth/signin" element={ <Auth><SigninCardContainer /></Auth> }/>
            <Route path="/home" element={ <ProtectedRoute><Home /> </ProtectedRoute> }/>
            <Route path="/requests/recieved" element={<Request />}/>
            <Route path="/requests/sent" element={<RequestSent />}/>
            <Route 
                path="/workspace/:workspaceId" 
                element={ 
                    <ProtectedRoute>
                        <WorkspaceLayout 
                            children1={<WorkspacePanel />} 
                            children2={<WorkspaceRightPanel />}
                        />
                    </ProtectedRoute> 
                } 
            />

            <Route 
                path="/workspace/:workspaceId/channel/:channelId" 
                element={
                    <ProtectedRoute>
                        <WorkspaceLayout 
                            children1={<WorkspacePanel />} 
                            children2={<Channel />}
                        />
                    </ProtectedRoute>
                }
            />
            
            <Route 
                path="/profile"
                element={
                    <ProtectedRoute>
                        <WorkspaceLayout 
                            children1={<ProfileLeftPanel />}
                            children2={<ProfileRightPanel />}
                        />
                    </ProtectedRoute>
                }
            />

            <Route 
                path="/settings"
                element={
                    <ProtectedRoute>
                        <WorkspaceLayout 
                            children1={<SettingLeftPanel />}
                            children2={<SettingRightPanel />}
                        />
                    </ProtectedRoute>
                }
            />
            
            <Route path="/workspace/join/:workspaceId" element={ <JoinWorkspace /> }/>
            <Route path="/*" element={ <Notfound /> } />
        </Routes>
    )
}