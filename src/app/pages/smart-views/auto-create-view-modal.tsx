import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addView } from "@/redux/slice/views";
import { useGenerateView } from "@/service/view/generate-view";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2, SparkleIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function AutoCreateViewModal() {
    const [viewPrompt, setViewPrompt] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const { mutate, isPending: isGenerating } = useGenerateView();
    const dispatch = useDispatch();
    const client = useQueryClient();
    
 
    const handleGenerate = () => {
        if(viewPrompt.trim().length === 0) return;
        mutate({
            query: viewPrompt
        }, {
            onSuccess: (data) => {
                dispatch(addView(data));
                console.log("Created view:", JSON.stringify(data, null, 2));
                client.invalidateQueries({
                    queryKey: ["views"]
                });
            },
            onSettled: () => {
                setIsOpen(false)
            }
        })

    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="text-xs rounded-3xl text-on-primary bg-primary dark:bg-primary-hard dark:text-on-surface cursor-pointer hover:bg-primary-hard/80 hover:-translate-y-0.5 transition-transform">
                    <SparkleIcon/>
                    Generate View
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] backdrop-blur-[200px] dark:bg-surface">
                <DialogHeader>
                <DialogTitle className="text-on-surface flex gap-2 items-center">
                    <SparkleIcon/>
                    Generate a New Perspective
                </DialogTitle>
                <DialogDescription className="text-on-surface space-y-6">
                    Describe the kind of notes you want to see. Think of it as a lens — what topics, themes, or ideas matter to you right now?
                    <Input className="mt-4 border-primary bg-surface-container-high text-on-secondary-container" 
                        placeholder="Enter view description"
                        value={viewPrompt}
                        onChange={(e) => setViewPrompt(e.target.value)}
                    />
                    <small className="text-secondary">
                    💡 Tip: Use natural language — the AI will figure it out. The more specific, the better.
                    </small>
                </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                <Button
                    disabled={isGenerating || viewPrompt.trim().length === 0}
                    className="bg-primary text-on-primary flex items-center gap-2"
                    onClick={handleGenerate}
                    >
                    {isGenerating ? (
                        <>
                        <Loader2 className="animate-spin w-4 h-4" />
                        Generating...
                        </>
                    ) : (
                        "Generate"
                    )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
