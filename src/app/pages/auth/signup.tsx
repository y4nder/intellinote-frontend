const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* Left Side - Sign Up Form */}
      <div className="w-full md:w-1/3 p-8 md:p-14 flex flex-col px-8">
        <div className="flex items-center mb-16">
          <div className="w-10 h-10  rounded-full flex items-center justify-center mr-2">
            <img src="/Intellinote_Logo.png" alt="IntelliNote Logo" width="32" height="32" />
          </div>
          <span className="text-[#0500ff] text-xl font-medium">IntelliNote</span>
        </div>

        <h1 className="text-primary-foreground text-3xl font-extrabold ">Create an Account</h1>
        <p className="text-gray-600 text-sm mb-6">You can sign in or join with us if you're new to IntelliNote</p>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#7c84ff]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#11144b] text-white py-3 rounded-md hover:bg-[#0500ff] transition duration-300"
          >
            Create account
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?{" "} <span className="text-primary-foreground underline font-bold">Login</span>
        </p>
      </div>

      {/* Right Side - App Preview */}
      <div className="w-full md:w-2/3 bg-gradient-to-r from-primary-foreground/50 to-card-foreground md:p-0 flex flex-col overflow-hidden">
        <div className="text-white mb-8 md:p-14">
          <h2 className="text-4xl font-bold mb-2">
            Write notes intelligently using
            <br />
            <span className="text-primary-foreground/50 font-medium">IntelliNote</span>
          </h2>
          <p className="max-w-lg text-sm opacity-90 mt-4">
            smart note-taking app powered by AI that helps you organize your thoughts effortlessly. Using intelligent
            keyword detection and automatic folder categorization, IntelliNote instantly sorts your notes into relevant
            topics as you type.
          </p>
        </div>

        <img 
          src="/application preview.png" 
          alt="IntelliNote Logo" 
          className="w-full max-w-3xl ml-auto"
          width="900" 
          height="400"
        />
      </div>
    </div>
  )
}

export default Signup