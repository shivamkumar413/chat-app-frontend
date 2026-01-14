import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export const Notfound = ()=>{
    const navigate = useNavigate()
    return(
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#0F172A]">
            <Card className="text-center w-lg shadow-lg">
                <CardHeader>
                    <CardTitle>404 ! Page not found</CardTitle>
                    <p>
                        The page you are looking for does not exist
                    </p>
                </CardHeader>
                <CardContent className="space-y-3">

                    <img 
                        className="shadow-lg rounded-md"
                        src="https://static.vecteezy.com/system/resources/thumbnails/011/314/479/small_2x/illustrations-woman-using-binocular-looking-internet-connections-for-oops-404-error-design-concept-landing-page-vector.jpg" alt="" 
                    />

                    <Button
                        variant="outline"
                        size="lg"
                        onClick={()=>navigate(-1)}
                    >
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}