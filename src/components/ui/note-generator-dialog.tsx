import type React from "react"
import { useState, useRef } from "react"
import { X, FileText, Loader2, Sparkle, PaperclipIcon } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useDispatch } from "react-redux"
import { setIsGeneratingNote } from "@/redux/slice/folder-note"
import { useUploadFile } from "@/service/lex/file-upload"
import { useAutoCreateNote } from "@/service/lex/auto-create-note"
import { useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"

interface AttachedFile {
  id: string
  name: string
  status: "uploading" | "complete" | "failed"
}

export function NoteGeneratorDialog() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const [prompt, setPrompt] = useState("")
    const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([])
    const [isGenerating, setIsGenerating] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { mutate : uploadFileMutation } = useUploadFile();
    const { mutate: autoCreateMutation } = useAutoCreateNote();
    const navigate = useNavigate();
    const client = useQueryClient();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const filesArray = Array.from(e.target.files)

            const newFiles = Array.from(e.target.files).map((file) => ({
                id: "",
                name: file.name,
                status: "uploading" as const,
            }))

            setAttachedFiles((prev) => [...prev, ...newFiles])

            for (const file of filesArray) {
                const formData = new FormData()
                formData.append('file', file)
                formData.append('purpose', 'assistants')
                uploadFileMutation(formData, {
                    onSuccess : (data) => {
                        const fileId = data.id;
                        setTimeout(() => {
                            setAttachedFiles((prev) =>
                                prev.map((f) =>
                                    f.name === data.filename && f.status === "uploading" ? { ...f, id: fileId, status: "complete" } : f,
                                ),
                            )
                        }, 1000)
                    },
                    onError : () => {
                        setAttachedFiles((prev) =>
                            prev.map((f) =>
                                f.name === file.name && f.status === "uploading"
                                    ? { ...f, status: "failed" }
                                    : f
                            )
                        )
                    }
                })
            }

            // Clear the input
            if (fileInputRef.current) {
                fileInputRef.current.value = ""
            }
        }
    }

    // const simulateFileUpload = (file: AttachedFile, index: number) => {
    //     // Simulate upload delay
    //     setTimeout(() => {
    //         // Generate a mock ID
    //         const mockId = `file-${Date.now()}-${index}`

    //         setAttachedFiles((prev) =>
    //             prev.map((f) =>
    //                 f.name === file.name && f.status === "uploading" ? { ...f, id: mockId, status: "complete" } : f,
    //             ),
    //         )

    //         console.log(`File uploaded with ID: ${mockId}`)
    //     }, 1500) // 1.5 second delay to simulate upload
    // }

    const removeFile = (fileName: string) => {
        setAttachedFiles((prev) => prev.filter((file) => file.name !== fileName))
    }

    const handleNavigation = (noteId: string, noteTitle: string) => {
        const noteIdSlug = `${noteTitle.toLowerCase().replace(/\s+/g, "-")}-${noteId}`;
        navigate(`/Note/${noteIdSlug}`);
    };

    const handleGenerateNote = () => {        
        setIsGenerating(true)
        dispatch(setIsGeneratingNote(true));
        setOpen(false);

        const fileIds = attachedFiles
            .filter((file) => file.status === "complete")
            .map((file) => file.id);

        autoCreateMutation({
            promptMessage: prompt,
            fileIds
        }, {
            onSuccess : (data) => {
                client.invalidateQueries({queryKey: ["user-notes"]});
                setPrompt("");
                setAttachedFiles([]);
                handleNavigation(data.noteId, data.title);
            },
            onSettled: () => {
                setIsGenerating(false)
                dispatch(setIsGeneratingNote(false));
            }
        })

    }

    return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button 
            disabled={isGenerating}
            className="text-xs gap-1 rounded-full py-2 text-on-primary cursor-pointer hover:bg-primary/80">
            <Sparkle width={12}/>
            Lex
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] bg-surface-container">
        <DialogHeader>
            <DialogTitle className="text-xl text-on-surface flex items-center gap-2">
                <Sparkle className="text-primary" size={18} />
                Ask Lex to Craft Your Note
            </DialogTitle>
            <DialogDescription className="text-sm text-secondary">
                Describe what your note should cover — Lex will handle the rest.
            </DialogDescription>
            
        </DialogHeader>
        <div className="space-y-6 py-4">
            <div className="space-y-3">
                <Textarea
                    placeholder="e.g. Make me a note about quantum computing"
                    className="min-h-[100px] resize-none bg-surface-container-low text-secondary placeholder:text-secondary border-none ring-primary-container"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <small className="text-secondary">
                    💡 Tip: Be as specific as you'd like. Lex is a great listener.
                </small>
            </div>
            <div className="flex items-center gap-2">
            <Button 
                className="gap-2 text-on-surface bg-surface-container-high hover:bg-surface-container-highest cursor-pointer" 
                onClick={() => fileInputRef.current?.click()}>
                <PaperclipIcon size={16} />
                Attach Files
            </Button>
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} multiple />

            <Button
                onClick={handleGenerateNote}
                disabled={!prompt.trim() || isGenerating}
                className="ml-auto bg-primary-hard text-white dark:text-on-surface"
            >
                {isGenerating ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                </>
                ) : (
                "🧠 Let Lex Think"
                )}
            </Button>
            </div>

            {attachedFiles.length > 0 && (
            <div className="space-y-2">
                <h3 className="text-sm font-medium text-on-surface">Attached files</h3>
                <div className="space-y-2">
                {attachedFiles.map((file) => (
                    <div
                    key={file.name}
                    className={cn(
                        "flex items-center justify-between rounded-md border border-primary-container p-3 text-on-surface",
                        file.status === "uploading" ? "bg-muted/50" : "bg-surface-container-low",
                    )}
                    >
                    <div className="flex items-center gap-2">
                        <FileText size={16} className="text-muted-foreground" />
                        <span className="text-sm font-medium">{file.name}</span>
                        {file.status === "uploading" && (
                        <Loader2 size={14} className="animate-spin text-muted-foreground" />
                        )}
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFile(file.name)}>
                        <X size={14} />
                        <span className="sr-only">Remove</span>
                    </Button>
                    </div>
                ))}
                </div>
            </div>
            )}
        </div>
        </DialogContent>
    </Dialog>
    )
}
