import { SettingsLayout } from "@/components/layouts/settings-layout";
import AccountSettings from "./account-settings";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useState } from "react";
import { useSidebar } from "@/providers/sidebar/sidebar-context";

export default function SettingsPage() {
    const {isCollapsed} = useSidebar();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button
                onClick={() => setIsOpen(true)}
                className={cn(
                "bg-surface flex items-center text-sm font-semibold hover:bg-surface-container-low p-2  text-start cursor-pointer",
                isCollapsed && "justify-center"
            )}
            >
                <Settings className="text-on-surface h-5 w-5" />
                {!isCollapsed && <span className="text-on-surface">Settings</span>}
            </Button>
            <DialogContent className="min-h-[85vh] min-w-[50lh] bg-surface-container-low" showCloseButton={false}>
                <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription>
                </DialogDescription>
                </DialogHeader>
                <SettingsLayout>
                    <AccountSettings />
                </SettingsLayout>
            </DialogContent>
        </Dialog>
    )
}
  