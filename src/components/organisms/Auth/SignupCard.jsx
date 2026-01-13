import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const SignupCard = ()=>{

    const [signupForm,setSignupForm] = useState({
        email : '',
        password : '',
        confirmPassword : '',
        username : ''
    })

    return(
        <Card className="h-full w-full">
            <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription>Signup to create new account</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-3">
                    <Input 
                        type={"email"}
                        placeholder="Email"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,email : e.target.value})
                        }}
                        value={signupForm.email}
                        disabled={false}
                    />
                    <Input 
                        type={"email"}
                        placeholder="Username"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,username : e.target.value})
                        }}
                        value={signupForm.username}
                        disabled={false}
                    />
                    <Input 
                        type={"password"}
                        placeholder="Password"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,password : e.target.value})
                        }}
                        value={signupForm.password}
                        disabled={false}
                    />
                    <Input 
                        type={"password"}
                        placeholder="Confirm Password"
                        required
                        onChange={(e)=>{
                            setSignupForm({...signupForm,confirmPassword : e.target.value})
                        }}
                        value={signupForm.confirmPassword}
                        disabled={false}
                    />

                    <Button
                        disabled={false}
                        size="lg"
                        type="submit"
                        className="w-full"
                    >
                        Continue
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}