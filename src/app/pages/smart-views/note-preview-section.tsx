import { Badge } from "@/components/ui/badge"
import { Note } from "@/types/note"
import type { FC } from "react"

interface NotePreviewSectionProps {
  filteredNotes: Note[]
}

const NotePreviewSection: FC<NotePreviewSectionProps> = ({ filteredNotes }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Notes preview ({filteredNotes.length} matching notes)</h3>
      <div className="border rounded-md overflow-hidden">
        {filteredNotes.length > 0 ? (
          <div className="max-h-[650px] overflow-y-auto min-h-[450px]">
            <table className="w-full">
              <thead className="bg-surface-container-high sticky top-0">
                <tr>
                  <th className="text-left p-2 text-xs font-medium">Title</th>
                  <th className="text-left p-2 text-xs font-medium">Keywords</th>
                  <th className="text-left p-2 text-xs font-medium">Topics</th>
                </tr>
              </thead>
              <tbody>
                {filteredNotes.map((note) => (
                  <tr key={note.id} className="border-t hover:bg-muted/20">
                    <td className="p-2 text-sm">{note.title}</td>
                    <td className="p-2">
                      <div className="flex flex-wrap gap-1">
                        {note.keywords.map((keyword, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-wrap gap-1">
                        {note.topics.map((topic, i) => (
                          <Badge key={i} className="text-xs text-on-primary">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-muted-foreground">No notes match the current filters</div>
        )}
      </div>
    </div>
  )
}

export default NotePreviewSection
