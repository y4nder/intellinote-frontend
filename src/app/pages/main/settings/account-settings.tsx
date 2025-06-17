import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn, gradientsCombos } from "@/lib/utils"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

export default function AccountSettings() {
    const {user} = useSelector((state: RootState) => state.auth);
    return (
        <div className="space-y-8">
        <h1 className="text-2xl font-semibold text-on-surface">Account</h1>

        <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center text-on-surface">
            <div className={cn("rounded-full w-20 h-20 p-2 flex items-center justify-center text-white", `bg-gradient-to-r ${gradientsCombos[2]}`)}>
                <span className="text-3xl font-semibold">{user?.userName[0].toUpperCase() ?? "!!"}</span>
            </div>
            <div className="space-y-2">
                <div>
                <p className="text-sm">Preferred name</p>
                <Input className="max-w-md bg-surface-container-high border-primary-container mt-1" 
                    placeholder="Enter your name" 
                    value={user?.userName}
                    />
                </div>
                <Button variant="link" className="text-blue-400 p-0 h-auto cursor-pointer">
                    Create your portrait
                </Button>
            </div>
            </div>
        </div>

        <div className="text-on-surface">
            <h2 className="text-xl font-medium mb-4">Account security</h2>
            <Separator className="bg-primary-container/20 mb-6" />

            <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-400 text-sm">{user?.email}</p>
                </div>
                <Button variant="outline" className="bg-surface-container-low border-primary-container hover:bg-on-primary-fixed-variant cursor-pointer">
                Change email
                </Button>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                <h3 className="font-medium">Password</h3>
                <p className="text-gray-400 text-sm">
                    If you lose access to your email address, you'll be able to log in using your password.
                </p>
                </div>
                <Button variant="outline" className="bg-surface-container-low border-primary-container hover:bg-on-primary-fixed-variant cursor-pointer">
                Change password
                </Button>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                <h3 className="font-medium">2-step verification</h3>
                <p className="text-gray-400 text-sm">Add an additional layer of security to your account during login.</p>
                </div>
                <Button variant="outline" className="bg-surface-container-low border-primary-container hover:bg-on-primary-fixed-variant cursor-pointer">
                Add verification method
                </Button>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                <h3 className="font-medium">Passkeys</h3>
                <p className="text-gray-400 text-sm">Securely sign-in with on-device biometric authentication.</p>
                </div>
                <Button variant="outline" className="bg-surface-container-low border-primary-container hover:bg-on-primary-fixed-variant cursor-pointer">
                Add passkey
                </Button>
            </div>
            </div>
        </div>

        <div className="text-on-surface">
            <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
                <h3 className="font-medium">Support access</h3>
                <p className="text-gray-400 text-sm">
                Grant support temporary access to your account so we can troubleshoot problems or recover content on your
                behalf. You can revoke access at any time.
                </p>
            </div>
            </div>
        </div>

        <div className="py-4">
            <Button variant="ghost" 
                className="text-red-500 hover:text-red-400 hover:bg-red-950 px-2">
            Delete my account
            </Button>
        </div>
    </div>
  )
}
