import { TypingAnimation } from "@/components/magicui/typing-animation"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavLink } from "react-router-dom"

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* Left Side - Sign Up Form */}
      <div className="w-full md:w-1/3 p-8 md:p-14 flex flex-col">
        <div className="flex items-center mb-8 md:mb-16 justify-between">
          <div className="flex gap-1 items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-2">
              <img src="/Intellinote_Logo.png" alt="IntelliNote Logo" width="24" height="24" className="md:w-8 md:h-8" />
            </div>
            <span className="text-[#0500ff] text-lg md:text-xl font-medium">IntelliNote</span>
          </div>
          <ModeToggle />
        </div>
        
        <div className="flex flex-col my-auto">  
          <h1 className="text-primary-foreground text-2xl md:text-3xl font-extrabold">Create an Account</h1>
          <p className="text-gray-600 text-sm mb-4 md:mb-6">You can sign in or join with us if you're new to IntelliNote</p>

          <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Create Password"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#11144b] text-white py-2 md:py-3 rounded-md hover:bg-[#0500ff] transition duration-300"
            >
              Create account
            </button>
          </form>
          <p className="text-center mt-4 md:mt-6">
            Already have an account?{" "} <NavLink className="text-primary-foreground underline font-bold" to={"/auth/login"}>Login</NavLink>
          </p>
        </div>
      </div>

      {/* Right Side - App Preview */}
      <BackgroundGradientAnimation 
        gradientBackgroundStart="rgb(191, 194, 255)"
        gradientBackgroundEnd="rgb(53, 60, 255)"
        className="w-full">
          <div className="absolute z-50 inset-0 pointer-events-none w-full h-fit flex flex-col overflow-hidden">
            <div className="text-white mb-4 md:mb-8 p-4 md:p-14">
              <TypingAnimation className="max-w-lg text-2xl md:text-3xl font-bold" as={"div"} duration={20} startOnView={true}>
                  Write notes intelligently using
              </TypingAnimation>
              <TypingAnimation className="text-primary-foreground font-medium text-2xl">
                  Intellinote
              </TypingAnimation>
              <TypingAnimation className="max-w-lg text-xs md:text-sm opacity-90 mt-2 md:mt-4 font-normal" as="p" duration={10}>
                smart note-taking app powered by AI that helps you organize your thoughts effortlessly. Using intelligent
                keyword detection and automatic folder categorization, IntelliNote instantly sorts your notes into relevant
                topics as you type.
              </TypingAnimation>
            </div>

            <img 
              src="/application preview.png" 
              alt="IntelliNote Preview" 
              className="w-full max-w-2xl md:max-w-3xl ml-auto mt-auto right-0 bottom-0"
              width="900" 
              height="900"
            />

          </div>
      </BackgroundGradientAnimation>
    </div>
  )
}

export default Signup