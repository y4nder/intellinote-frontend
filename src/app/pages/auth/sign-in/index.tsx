
import { TypingAnimation } from "@/components/magicui/typing-animation"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { PageLoadingProgress } from "@/components/ui/page-loading-progress"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { loginUser } from "@/redux/slice/auth"

import { useSignIn } from "@/service/auth/login"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"

const Login = () => {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const {mutate, isPending} = useSignIn();


  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile && mobileScrollRef.current) {
      setTimeout(() => {
        mobileScrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  }, [isMobile]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const email = formData.get("email");
    const password = formData.get("password");
    

    mutate({
      email : email!.toString(),
      password: password!.toString(),
      useCookie: true
    }, {
      onSuccess : (data) => {
        if(data.access_token !== null) dispatch(loginUser(data));
        navigate("/");
      },
      onError : (e) => {
        alert(JSON.stringify(e, null, 2));
        console.log(JSON.stringify(e, null, 2));
      }
    })
  }


  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
        <PageLoadingProgress loading={isPending} />
        <BackgroundGradientAnimation 
          gradientBackgroundStart="rgb(191, 194, 255)"
          gradientBackgroundEnd="rgb(53, 60, 255)"
          className="w-full md:h-screen dark:bg-on-primary-fixed-variant"
        >
          <div className="absolute bottom-0 left-0 z-50 w-full md:w-2/3 p-4 md:p-14 pointer-events-none">
            <div className="text-white dark:text-secondary">
              <TypingAnimation className="max-w-lg text-2xl md:text-3xl font-bold" as="div" duration={20}>
                Write notes intelligently using
              </TypingAnimation>
              <TypingAnimation className="text-primary-foreground font-medium text-2xl">
                Intellinote
              </TypingAnimation>
              <TypingAnimation className="max-w-lg text-xs md:text-sm opacity-90 mt-2 md:mt-4 font-normal" as="p" duration={10}>
                Take notes, brainstorm, or journal freely — IntelliNote uses advanced AI to detect keywords and understand topics as you write. Your thoughts are instantly sorted into the right folders, so you stay organized without lifting a finger.
              </TypingAnimation>
            </div>
          </div>
        </BackgroundGradientAnimation>
      


      <div className="w-full md:w-1/3 p-8 md:p-14 flex flex-col bg-surface" ref={mobileScrollRef}>
        <div className="flex items-center mb-8 md:mb-16 justify-between">
          <div className="flex gap-1 items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-2">
              <img src="/Intellinote_Logo.png" alt="IntelliNote Logo" width="24" height="24" className="md:w-8 md:h-8" />
            </div>
            <span className="text-primary-hard dark:text-primary text-lg md:text-xl font-medium">IntelliNote</span>
          </div>
          <ModeToggle />
        </div>
        
        <div className="flex flex-col my-auto">  
            <h1 className="text-primary-hard dark:text-primary text-2xl md:text-3xl font-extrabold">Login</h1>
            <p className="text-on-surface text-sm mb-4 md:mb-6">You can sign in or join with us if you're new to IntelliNote</p>

          <form className="space-y-3 md:space-y-4" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue="user@example.com"
                className="w-full p-2 md:p-3 border border-primary-container text-on-surface bg-surface-container-low rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                defaultValue="User123#"
                placeholder="Create Password"
                className="w-full p-2 md:p-3 border border-primary-container text-on-surface bg-surface-container-low rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary-hard text-white dark:bg-primary-container dark:text-on-surface py-2 md:py-3 rounded-md hover:bg-primary-hard/60 transition duration-300 cursor-pointer"
            >
              Login
            </Button>
          </form>
          <p className="text-center mt-4 md:mt-6 text-on-surface">
            Don't have an account?{" "} <NavLink className="text-primary-hard dark:text-on-surface underline font-bold" to={"/auth/signup"}>Create an account</NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
  
