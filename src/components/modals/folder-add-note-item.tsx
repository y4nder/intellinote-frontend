import { Button } from "@/components/ui/button"
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Note } from "@/types/note"
import { useState } from "react"
import type { Folder } from "@/types/folder"
import type { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { FolderIcon, CheckIcon } from "lucide-react"

type AddToFolderModalProps = {
  note: Note
  onCancel: () => void
  onConfirm: (folder: Folder) => void
}

export default function AddToFolderModal({ note, onCancel, onConfirm }: AddToFolderModalProps) {
  const { folders } = useSelector((state: RootState) => state.folderNotes)
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null)

  return (
    <DialogContent onClick={(e) => e.stopPropagation()}>
      <DialogHeader>
        <DialogTitle>Add "{note.title}" to folder</DialogTitle>
        <DialogDescription>Select a folder to add this note to</DialogDescription>
      </DialogHeader>

      <div className="max-h-[300px] overflow-y-auto py-2 space-y-2">
        {folders.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">No folders available</div>
        ) : (
          folders.map((folder) => (
            <div
              key={folder.id}
              className={`flex items-center p-3 rounded-md cursor-pointer transition-colors ${
                selectedFolder?.id === folder.id
                  ? "bg-primary/10 border border-primary"
                  : "bg-surface-container hover:bg-surface-dim border border-transparent"
              }`}
              onClick={() => setSelectedFolder(folder)}
            >
              <div className="flex-shrink-0 mr-3">
                <FolderIcon
                  className={`h-5 w-5 ${selectedFolder?.id === folder.id ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>
              <div className="flex-grow font-medium">{folder.name}</div>
              {selectedFolder?.id === folder.id && (
                <div className="flex-shrink-0">
                  <CheckIcon className="h-5 w-5 text-primary" />
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <DialogFooter>
        <Button className="bg-surface-container text-gray-700 hover:bg-surface-dim" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          disabled={selectedFolder === null}
          className="bg-primary text-white px-4 hover:bg-primary/90"
          onClick={() => onConfirm(selectedFolder!)}
        >
          Add to folder
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
