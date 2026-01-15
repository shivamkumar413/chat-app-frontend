import { Route, Routes } from "react-router-dom";
import { Auth } from "@/pages/Auth/Auth";
import { Notfound } from "@/pages/Notfound/Notfound";
import { SignupCardContainer } from "@/components/organisms/Auth/SignupCardContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SigninCardContainer } from "@/components/organisms/Auth/SigninCardContainer";
import { Toaster } from "@/components/ui/sonner";

function App() {

  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/auth/signup" element={ <Auth><SignupCardContainer /></Auth> }/>
        <Route path="/auth/signin" element={ <Auth><SigninCardContainer /></Auth> }/>
        <Route path="/home" element={ <Auth><h>Home</h></Auth> } />
        <Route path="/*" element={ <Notfound /> } />
      </Routes>
      <Toaster />
    </QueryClientProvider>
    </>

  );
}

export default App;
