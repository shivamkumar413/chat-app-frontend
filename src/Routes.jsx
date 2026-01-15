import { Route, Routes } from "react-router-dom"
import { Auth } from "@/pages/Auth/Auth"
import { SignupCardContainer } from "@/components/organisms/Auth/SignupCardContainer"
import { SigninCardContainer } from "@/components/organisms/Auth/SigninCardContainer"
import { Notfound } from "@/pages/Notfound/Notfound"

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/auth/signup" element={ <Auth><SignupCardContainer /></Auth> }/>
            <Route path="/auth/signin" element={ <Auth><SigninCardContainer /></Auth> }/>
            <Route path="/home" element={ <Auth><h>Home</h></Auth> } />
            <Route path="/*" element={ <Notfound /> } />
        </Routes>
    )
}