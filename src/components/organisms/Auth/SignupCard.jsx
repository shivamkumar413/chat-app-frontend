import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useNavigate } from "react-router-dom"
import { AlertTriangle } from "lucide-react"
import { LoaderCircle } from "lucide-react"

export const SignupCard = ({signupForm,setSignupForm,validationError,onSignupSubmit,isPending,isSuccess,error})=>{

    const navigate = useNavigate()

    return(
        <Card className="h-full w-full">
            <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription>Signup to create new account</CardDescription>

                {
                    validationError &&
                        <div className="flex bg-gray-200 p-2 rounded-md">
                            <span className="text-red-400 mr-2"><AlertTriangle /></span>
                            <span className="text-gray-700">{validationError.message}</span>
                        </div>
                }

                { error &&
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
                    onSubmit={onSignupSubmit}
                >
                    <Input 
                        type={"email"}
                        placeholder="Email"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,email : e.target.value})
                        }}
                        value={signupForm.email}
                        disabled={isPending}
                    />
                    <Input 
                        type={"text"}
                        placeholder="Username"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,username : e.target.value})
                        }}
                        value={signupForm.username}
                        disabled={isPending}
                    />
                    <Input 
                        type={"password"}
                        placeholder="Password"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,password : e.target.value})
                        }}
                        value={signupForm.password}
                        disabled={isPending}
                    />
                    <Input 
                        type={"password"}
                        placeholder="Confirm Password"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,confirmPassword : e.target.value})
                        }}
                        value={signupForm.confirmPassword}
                        disabled={isPending}
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
                    Already have an account ? {' '}
                    <span 
                        className="hover:underline cursor-pointer"
                        onClick={()=>navigate('/auth/signin')}
                        >
                            Sign in
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}