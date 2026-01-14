import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle } from "lucide-react"
import { LoaderCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const SigninCard = ({
    signinForm,
    setSigninForm,
    onSigninSubmit,
    isPending,
    isSuccess,
    error,
    validationError
    })=>{

    const navigate = useNavigate()

    return(
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to access your account</CardDescription>
                {
                    validationError &&
                        <div className="flex bg-gray-200 p-2 rounded-md">
                            <span className="text-red-400 mr-2"><AlertTriangle /></span>
                            <span className="text-gray-700">{validationError.message}</span>
                        </div>
                }

                {error &&
                    <div className="flex bg-gray-200 p-2 rounded-md">
                        <span className="text-red-400 mr-2"><AlertTriangle /></span>
                        <span className="text-gray-700">{error.message}</span>
                    </div>    
                }

                {
                    isSuccess && 
                        <LoaderCircle className="animate-spin"/>
                }
            </CardHeader>
            <CardContent>
                <form 
                    className="space-y-3"
                    onSubmit={onSigninSubmit}
                >
                    <Input
                        type={"email"}
                        placeholder="Email"
                        disabled={isPending}
                        required
                        onChange={(e)=>{
                            setSigninForm({...signinForm,email : e.target.value})
                        }}  
                        value={signinForm?.email}
                    />

                    <Input 
                        type={"password"}
                        placeholder="Password"
                        disabled={isPending}
                        required
                        onChange={(e)=>{
                            setSigninForm({...signinForm,password : e.target.value})
                        }}
                        value={signinForm?.password}
                    />

                    <Button
                        disabled={isPending}
                        size="lg"
                        type="submit"
                        className="w-full"
                    >
                        Continue
                    </Button>
                </form>

                <Separator className="my-6"></Separator>

                <div className="text-sm text-gray-500">
                    Don't have an account ? {' '}
                    <span 
                        className="hover:underline cursor-pointer"
                        onClick={()=>navigate('/auth/signup')}
                        >
                            Sign up
                    </span>
                </div>
            </CardContent>
        </Card>
    )
} 