import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormInput } from "../ui/form/form.input"
import {
    Form,
  } from "@/components/ui/form/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, loginSchema } from "@/service/auth/login"
import { BorderBeam } from "../magicui/border-beam"


export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

const form = useForm<LoginSchema>({
  resolver: zodResolver(loginSchema),
  defaultValues: {
      email: "juan@gmail.com",
      password: "User123#"
  }
})

const onSubmit = (value: LoginSchema) => {
  console.log(value)
}

 return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="relative">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-primary font-bold">Login</CardTitle>
          <CardDescription>
            Login to your Administrator account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                  <div className="grid gap-6">

                   <FormInput
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="m@gmail.com"

                    />

                    <FormInput
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder=""
                        type="password"
                    />


                    <Button type="submit" className="w-full bg-primary">
                      Login
                    </Button>
                  </div>
                </div>
              </form>
          </Form>
        </CardContent>
        <BorderBeam duration={8} size={100}/>
      </Card>
    </div>
  )
}
