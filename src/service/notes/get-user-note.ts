// import { mockApiCallNote } from "@/data/mockData";
import { api } from "@/lib/axios";
import { GetUserNoteResponse, GetUserNoteResponseParsed } from "@/types/note";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useQuery } from "@tanstack/react-query";


const getUserNote = async (noteId: string): Promise<GetUserNoteResponseParsed> => {
  const {data} = await api.get<GetUserNoteResponse>("/api/notes/" + noteId);
  let parsedContent : PartialBlock[];

  try{
    parsedContent = JSON.parse(data.note!.content!) as PartialBlock[]
  }catch(error){
    const editor = BlockNoteEditor.create();
    const blocksFromMd = await editor.tryParseMarkdownToBlocks(data.note!.content!)
    parsedContent = blocksFromMd
  }

  const noteParsed: GetUserNoteResponseParsed = {
    note: data.note,
    content: parsedContent,
  };

  return noteParsed;
}

export const useGetUserNote = (noteId: string) => {
    return useQuery<GetUserNoteResponseParsed>({
        queryKey: ["user-notes", noteId],
        queryFn: () => getUserNote(noteId)
    });
};
  