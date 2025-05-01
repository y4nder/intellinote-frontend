import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
    Form,
  } from "@/components/ui/form/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"


import { FormInput } from "../ui/form/form.input"
import { registerSchema, RegisterSchema } from "@/service/auth/register"


export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {


const form = useForm<RegisterSchema>({
  resolver: zodResolver(registerSchema),
  defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
  }
})

const onSubmit = (value: RegisterSchema) => {
  console.log('value', value);
}

 return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="">
          <CardTitle className="text-xl">Create an Account</CardTitle>
          <CardDescription>
            You can sign in or join with us if you’re new to IntelliNote
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                  <div className="flex flex-col gap-4">
                    
                    <FormInput 
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="m@gmail.com"
                        
                    />

                    <FormInput 
                        control={form.control}
                        name="name"
                        label="Name"
                        placeholder="JohnDoe"
                        
                    />          

                    <FormInput 
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder=""
                        type="password"
                    />

                    <FormInput 
                        control={form.control}
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder=""
                        type="password"
                    />

                    <Button type="submit" className="w-full">
                      Sign up
                    </Button>
                    </div>
                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <NavLink className="underline underline-offset-4" to="/auth/login">Login</NavLink>
                  </div>
                </div>
              </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
