import { Button } from "@/components/ui/button";
import SavingIndicator from "@/components/ui/saving-indicator";
import { useAutoSave } from "@/hooks/useAutoSave";
import { cn, extractIdFromSlug, getGradientClassesFromString } from "@/lib/utils";
import { setIsSaving, setSelectedFolderDescription, setSelectedFolderTitle } from "@/redux/slice/folder-note";
import { RootState } from "@/redux/store";
import { useUpdateFolder } from "@/service/folders/update-folder";
import { BotMessageSquareIcon, CalendarDays, FileText, NotebookIcon, Plus, Tag, User } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddNotesDialog from "./folder-add-notes";
import { useFolderUpdateDoneSocket } from "@/hooks/sockets";


export default function FolderPageHeader() {
    const { selectedFolder } = useSelector((state: RootState) => state.folderNotes)
    const { folderId } = useParams();
    const dispatch = useDispatch();
    
    const titleRef = useRef<HTMLTextAreaElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const hasMountedTitle = useRef(false);
    const hasMountedDescription = useRef(false);
    
    const [folderTitle, setFolderTitle] = useState<string|undefined>(undefined);
    const [folderDescription, setFolderDescription] = useState<string|undefined>(undefined);
    const {mutate: updateFolderMutation} = useUpdateFolder();
    
    const id = extractIdFromSlug(folderId!);
    
    // Sync title and description state    
    useEffect(() => {
        if (selectedFolder && !hasMountedTitle.current) {
            setFolderTitle(selectedFolder.name);
            hasMountedTitle.current = true;
        }
    }, [selectedFolder]);

    useEffect(() => {
        if (selectedFolder && !hasMountedDescription.current) {
            if(selectedFolder.description)
            setFolderDescription(selectedFolder.description);
            hasMountedDescription.current = true;
        }
    }, [selectedFolder]);
  
    useEffect(() => {
        const textarea = document.getElementById("folder-title-textarea");
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [folderTitle]);


    useEffect(() => {
        const textarea = document.getElementById("folder-description-textarea");
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [folderDescription]);


    const handleSaveTitle = useCallback((latestFolderName: string | undefined) => {
        if (!id || !selectedFolder) return;
        if(!latestFolderName || (latestFolderName === selectedFolder.name)) return;
        dispatch(setIsSaving(true));
        console.log("saving title...");
        updateFolderMutation({
            folderId: id!,
            name: folderTitle,
        }, 
        {
            onSuccess: () => {
            console.log("saved title");
            dispatch(setSelectedFolderTitle(latestFolderName));
            dispatch(setIsSaving(false));
            }
        })
    },[dispatch, id, updateFolderMutation, folderTitle, selectedFolder]);

    const handleSaveDescription = useCallback((latestFolderDescription: string | undefined) => {
        if (!id || !selectedFolder) return;
        if(!latestFolderDescription || (latestFolderDescription === selectedFolder.description)) return;
        console.log("description guard",(latestFolderDescription === selectedFolder.description));
        dispatch(setIsSaving(true));
        console.log("saving description...");
        updateFolderMutation({
            folderId: id!,
            description: folderDescription,
        }, {
            onSuccess: () => {
            console.log("saved description");
            dispatch(setSelectedFolderDescription(latestFolderDescription));
            dispatch(setIsSaving(false));
            }
        })
    },[dispatch, id, updateFolderMutation, folderDescription, selectedFolder])


    useAutoSave(folderTitle, handleSaveTitle, 1000, hasMountedTitle.current);
    useAutoSave(folderDescription, handleSaveDescription, 1000, hasMountedTitle.current);

    //socket
    useFolderUpdateDoneSocket((notification) => {
        console.log("received description:", notification.folderDescription);
        dispatch(setSelectedFolderDescription(notification.folderDescription));
        setFolderDescription(notification.folderDescription);
    })

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }
    
    const displayedKeywords = selectedFolder!.keywords.slice(0, 15)
    const extraKeywordCount = selectedFolder!.keywords.length - displayedKeywords.length
    const gradientClass = getGradientClassesFromString(selectedFolder!.name);

    return (
    <>
        <div className="px-6 pb-1 pt-6 md:p-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">   
                <div className="flex-1">
                    <SavingIndicator/>
                    {/* Folder Title */}
                    <div className="flex gap-6 mt-4 mb-4">
                        <div className="w-12 h-fit max-w-12 rounded-lg flex items-center justify-center">
                            <div
                            className={cn(
                                "mask-[url('/folderIcon.png')] mask-no-repeat mask-center mask-contain",
                                "w-full max-w-[103px] aspect-[103/75]",
                                gradientClass.base, gradientClass.hover
                            )}
                            />
                        </div>
                        <textarea
                            ref={titleRef}
                            value={folderTitle}
                            onChange={(e) => setFolderTitle(e.target.value)}
                            placeholder={id? "" : "Untitled Note"}
                            className="w-full resize-none text-4xl font-extrabold text-foreground bg-transparent outline-none border-none focus:ring-0 leading-tight"
                            rows={1}
                            id="folder-title-textarea"
                        />
                    </div>
                    <textarea 
                        ref={descriptionRef}
                        value={folderDescription}
                        onChange={(e) => setFolderDescription(e.target.value)}
                        placeholder="No Description"
                        className="text-gray-600 dark:text-gray-300 mb-5 w-full focus:outline-none"
                        id="folder-description-textarea"
                    />

                    <div className="flex flex-wrap gap-2">
                        {displayedKeywords.map((keyword, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                                <Tag className="w-3 h-3 mr-1" />
                                {keyword}
                            </span>
                        ))}
                        {extraKeywordCount > 0 && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                                +{extraKeywordCount} more
                            </span>
                        )}
                    </div>
                    <div className="text-sm flex gap-4 mt-8 items-center text-gray-500 dark:text-gray-400 w-full md:w-auto">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Created by {selectedFolder!.author.userName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            <span>Created on {formatDate(selectedFolder!.createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            <span>{selectedFolder!.notes.length} notes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4 flex gap-2 justify-items-center text-white pl-2 pb-4">
            <AddNotesDialog/>
            <Button className="text-xs rounded-2xl bg-red-400 hover:bg-red-600 font-bold">
                <Plus/>
                <NotebookIcon/>
                Create Study Set
            </Button>
            <Button className="text-xs rounded-2xl">
                <BotMessageSquareIcon/>
                Ask
            </Button>
        </div>
    </>
  )
}
