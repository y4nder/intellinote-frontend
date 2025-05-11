import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { Note } from "@/types/note"
import { Folder } from "@/types/folder"
import { useDebounce } from "@/hooks/useDebounce"
import { getUserNotes } from "@/service/notes/get-user-notes"
import SearchModalSkeleton from "./search-modal-skeleton"
import SearchNoteItem from "./search-note-item"
import { DialogDescription } from "@radix-ui/react-dialog"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { getUserFolders } from "@/service/folders/get-user-folders"
import SearchFolderItem from "./search-folder-item"
import { cn } from "@/lib/utils"


const SEARCH_DELAY = 800;

export function SearchModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    const { recentNotes, folders: stateFolders } = useSelector((state: RootState) => state.folderNotes)


    const [searchQuery, setSearchQuery] = useState("")
    const [notes, setNotes] = useState<Note[]>([])
    const [folders, setFolders] = useState<Folder[]>([])
    const [loading, setLoading] = useState(false)
    const debouncedQuery = useDebounce(searchQuery, SEARCH_DELAY);
    // const [isOpen, setIsOpen] = useState(open);

    const searchInputRef = useRef<HTMLInputElement>(null)

    // Focus search input when modal opens
    useEffect(() => {
        if (open && searchInputRef.current) {
            setTimeout(() => {
            searchInputRef.current?.focus()
            }, 100)
        }
    }, [open])

    useEffect(() => {
        if(debouncedQuery.trim().length === 0) {
            console.log("note querying with empty query");
            return;
        } else {
            console.log("querying with term: ", debouncedQuery);
            fetchData(debouncedQuery);
        }

    },[debouncedQuery])


    // Fetch both notes and folders
    const fetchData = async (query: string) => {
        setLoading(true)
        try {
            const {notes} = await getUserNotes({term: query,skip: 0,take: 5})
            const { folders } = await getUserFolders({term: query,skip: 0,take: 5})
            setNotes(notes)
            setFolders(folders)

        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setLoading(false)
        }
    }

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setSearchQuery(query)
    }

    // Initial data fetch
    useEffect(() => {
        if (open) {
            setNotes(recentNotes.slice(0,5));
            setFolders(stateFolders.slice(0,5));
        }
    }, [open])

    return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={cn("border border-secondary/20 p-0 gap-0 min-w-[750px] max-h-[750px] top-[450px] backdrop-blur-[80px] dark:bg-surface-container shadow-2xl",
            ``
        )}>
            <DialogHeader>
                <VisuallyHidden>
                    <DialogTitle>Dialog Title</DialogTitle> 
                </VisuallyHidden>
                <DialogDescription className="p-4 border-b border-surface-container flex items-center gap-2">
                    <Search className="h-5 w-5 text-on-background shrink-0" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="flex-1 bg-transparent border-none outline-none text-on-surface"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </DialogDescription>
            </DialogHeader>

            <div className="overflow-y-auto">
                {loading ? (
                    <SearchModalSkeleton/>
                ) : (
                <>

                    {/* Notes Section */}
                    {notes.length > 0 && (
                        <div className="py-2">
                            <div className="px-4 py-1 text-xs font-medium text-on-background uppercase tracking-wider">
                                Notes{" "}
                                <Badge variant="outline" className="ml-1">
                                    {notes.length}
                                </Badge>
                            </div>
                            {notes.map((note) => (
                                <SearchNoteItem key={note.id} note={note} onSelect={() => onOpenChange(false)}/>
                            ))}
                        </div>
                    )}

                    {/* Folders Section */}
                    {folders.length > 0 && (
                        <div className="py-2">
                            <div className="px-4 py-1 text-xs font-medium text-on-background uppercase tracking-wider">
                                Folders{" "}
                                <Badge variant="outline" className="ml-1">
                                    {folders.length}
                                </Badge>
                            </div>
                            {folders.map((folder) => (
                                <SearchFolderItem key={folder.id} folder={folder} onSelect={() => onOpenChange(false)} />
                            ))}
                        </div>
                    )}

                    {/* No Results */}
                    {folders.length === 0 && notes.length === 0 && (
                        <div className="flex justify-center p-8 text-on-background">No results found</div>
                    )}
                </>
                )}
            </div>
        </DialogContent>
    </Dialog>
    )
}
