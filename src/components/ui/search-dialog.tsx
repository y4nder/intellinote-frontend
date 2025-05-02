import * as React from "react"
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useSearchDialog } from "@/providers/searchDialog"

export function SearchDialog() {
  const {isOpen, toggleSearchDialog } = useSearchDialog();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;
  
      // Trigger something else on Cmd/Ctrl + P
      if (e.key === "k" && isCmdOrCtrl) {
        e.preventDefault();
        // Replace with your own logic
        toggleSearchDialog();
      }
      // Toggle on Cmd/Ctrl + J
      if (e.key === "j" && isCmdOrCtrl) {
        e.preventDefault();
        toggleSearchDialog();
      }
  
    };
  
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  

  return (
    <>
      <CommandDialog open={isOpen} onOpenChange={toggleSearchDialog}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
