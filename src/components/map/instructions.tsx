import { useState, useEffect } from "react"
import { AlertCircle } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { socket } from "@/lib/socket"

interface InstructionResponse {
  userId: string,
  instruction: string
}

export function InstructionsModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [instructions, setInstructions] = useState("")

  useEffect(() => {
    const handleInstruction = (data: InstructionResponse) => {
      setInstructions(data.instruction);
      setIsOpen(true);
	  // set open to true
    };
  
    socket.on("disaster:instruction", handleInstruction);
   
    return () => {
      socket.off("disaster:instruction", handleInstruction);
      socket.disconnect(); // Optional: only if you want to fully disconnect the socket on unmount
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* {error && (
        <Alert variant="destructive" className="fixed bottom-4 right-4 max-w-md z-50">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )} */}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Instruction</DialogTitle>
            <DialogDescription>Please read the following instructions carefully.</DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 mt-4 p-4 border rounded-md bg-muted/50 prose prose-sm dark:prose-invert max-h-96">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {instructions}
            </ReactMarkdown>
          </ScrollArea>


          <DialogFooter className="mt-4">
            <Button onClick={handleClose}>Acknowledge</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
