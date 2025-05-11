"use client"

import { FolderIcon, NotebookIcon, Loader2 } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useSearchDialog } from "@/providers/searchDialog"
import type { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import type { Note } from "@/types/note"
import type { Folder } from "@/types/folder"
import { useDebounce } from "@/hooks/useDebounce"
import { useSearchUserNotes } from "@/service/notes/get-user-notes"

export function SearchDialog() {
  const { recentNotes, folders } = useSelector((state: RootState) => state.folderNotes)
  const { isOpen, toggleSearchDialog } = useSearchDialog()

  const [searchTerm, setSearchTerm] = useState("")
  const [searchedNotes, setSearchedNotes] = useState<Note[]>([])
  const [searchedFolders, setSearchedFolders] = useState<Folder[]>([])
  const debouncedSearch = useDebounce(searchTerm, 500)

  const { data: searchResultNotes, isLoading } = useSearchUserNotes({
    term: debouncedSearch,
    skip: 0,
    take: 10
  })

  // Update search results when debounced search changes
  useEffect(() => {
    if (!isOpen) return;
  
    const trimmed = debouncedSearch.trim();
    
    if (searchResultNotes) {
      console.log("API response:", searchResultNotes.notes.length);
      setSearchTerm("");
      setSearchedNotes(searchResultNotes.notes || []);
      
      const filteredFolders = folders
        ?.filter((folder) => folder.name.toLowerCase().includes(trimmed.toLowerCase()))
        .slice(0, 5);
  
      setSearchedFolders(filteredFolders || []);
    }
  }, [debouncedSearch, searchResultNotes, folders, recentNotes, isOpen]);
  

  useEffect(() => {
    console.log("Searched notes:", searchedNotes);
    console.log("Searched notes length:", searchedNotes.length); // Log length here
  }, [searchedNotes]);

  // Initialize with recent items
  useEffect(() => {
    if (isOpen) {
      setSearchedNotes(recentNotes?.slice(0, 3) || []);
      setSearchedFolders(folders?.slice(0, 3) || []);
    }
    console.log("Searched Notes After Effect:", searchedNotes);
  }, [isOpen]);
  

  // Keyboard shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey

      if ((e.key === "k" || e.key === "j") && isCmdOrCtrl) {
        e.preventDefault()
        toggleSearchDialog()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [toggleSearchDialog])

  const handleClose = () => {
    setSearchTerm("")
    toggleSearchDialog()
  }

  const navigateToNote = (note: Note) => {
    console.log(note);
    handleClose()
  }

  const navigateToFolder = (folder: Folder) => {
    console.log(folder);
    handleClose()
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={() => handleClose()}>
      <CommandInput placeholder="Search notes and folders..." value={searchTerm} onValueChange={setSearchTerm} />
      <CommandList>
        {isLoading && (
          <div className="py-6 text-center">
            <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground mt-2">Searching...</p>
          </div>
        )}

        {searchedNotes.length > 0 && (
          <CommandGroup heading="Notes">
            {searchedNotes.map((note) => (
              <CommandItem
                key={note.id}
                onSelect={() => navigateToNote(note)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <NotebookIcon className="h-4 w-4 text-muted-foreground" />
                <span>{note.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {searchedNotes.length > 0 && searchedFolders.length > 0 && <CommandSeparator />}

        {searchedFolders.length > 0 && (
          <CommandGroup heading="Folders">
            {searchedFolders.map((folder) => (
              <CommandItem
                key={folder.id}
                onSelect={() => navigateToFolder(folder)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FolderIcon className="h-4 w-4 text-muted-foreground" />
                <span>{folder.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {searchedNotes.length === 0 && searchedFolders.length === 0 && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
      </CommandList>

    </CommandDialog>
  )
}
