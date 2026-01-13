import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const SigninCard = ()=>{

    const [signinForm,setSigninForm] = useState({
        email : '',
        password : ''
    })

    return(
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-3">
                    <Input
                        type={"email"}
                        placeholder="Email"
                        disabled={false}
                        required
                        onChange={(e)=>{

                        }}  
                        value={signinForm.email}
                    />

                    <Input 
                        type={"password"}
                        placeholder="Password"
                        disabled={false}
                        required
                        onChange={(e)=>{

                        }}
                        value={signinForm.password}
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