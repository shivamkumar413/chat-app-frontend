import { Route, Routes } from "react-router-dom"
import { Auth } from "@/pages/Auth/Auth"
import { SignupCardContainer } from "@/components/organisms/Auth/SignupCardContainer"
import { SigninCardContainer } from "@/components/organisms/Auth/SigninCardContainer"
import { Notfound } from "@/pages/Notfound/Notfound"
import { Home } from "./pages/Home/Home"
import { ProtectedRoute } from "./components/molecules/ProtectedRoute"
import { WorkspaceLayout } from "./pages/Workspace/Layout"

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/auth/signup" element={ <Auth><SignupCardContainer /></Auth> }/>
            <Route path="/auth/signin" element={ <Auth><SigninCardContainer /></Auth> }/>
            <Route path="/home" element={ <ProtectedRoute><Home /> </ProtectedRoute> }/>
            <Route path="/workspace/:workspaceId" element={ <ProtectedRoute><WorkspaceLayout>Workspace</WorkspaceLayout></ProtectedRoute> } />
            <Route path="/*" element={ <Notfound /> } />
        </Routes>
    )
}