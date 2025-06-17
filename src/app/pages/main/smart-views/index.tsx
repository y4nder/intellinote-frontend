import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import CreateViewModal from "./create-view-modal";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import ViewContainer from "./view-container";
import { useEffect } from "react";
import { setNotes, setSelectedNote } from "@/redux/slice/folder-note";
import { setSelectedView, setViews } from "@/redux/slice/views";
import { useGetUserNotes } from "@/service/notes/get-user-notes";
import { useGetUserViews } from "@/service/view/get-user-views";
import AutoCreateViewModal from "./auto-create-view-modal";
import { AnimatePresence, motion } from "framer-motion";



export default function SmartViewsPage() {
    const { views } = useSelector((state: RootState) => state.views);
    const {data: notes} =  useGetUserNotes({
        skip: 0,
        take: 100
    });
    const { data: userViews} = useGetUserViews();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setSelectedNote(null));
        dispatch(setSelectedView(null));
        if(notes){
            dispatch(setNotes(notes.notes));
        }
    }, [notes])

    useEffect(() => {
        if(userViews){
            dispatch(setViews(userViews));
        }
    }, [userViews])

    return (
        <div className="relative overflow-hidden min-h-screen">
          {/* Background Illustration Blobs */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-background"
          >
            <div className="absolute -top-10 -left-20 w-[600px] h-[600px] dark:bg-gradient-to-br dark:from-primary/30 dark:to-surface-container-high/20 rounded-full blur-3xl opacity-40 dark:bg-fuchsia-400/10"></div>
            <div className="absolute -bottom-20 -right-10 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-2xl opacity-30"></div>
          </div>
      
          {/* Main Content */}
          <div className="relative z-10 mt-12">
            {/* Breadcrumb */}
            <div className="pb-4 px-4 max-w-screen-xl mx-auto">
              <BreadcrumbUi />
            </div>
      
            {/* Header */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center mx-auto max-w-screen-xl px-4 gap-6">
              {/* Left Side */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-on-background">
                  🧠 Perspectives
                </h1>
                <p className="text-on-background font-medium max-w-2xl">
                  Slice your knowledge. Focus your attention. Perspectives help you surface exactly what matters—when it matters.
                </p>
              </div>
      
              {/* Right Side */}
              <div className="flex-shrink-0 space-x-3">
                <CreateViewModal isUpdating={false} />
                <AutoCreateViewModal />
              </div>
            </div>
      
            {/* Views */}
            <div className="mt-16 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-4 max-w-screen-xl mx-auto space-y-4">
            <AnimatePresence>
                {views.length > 0 &&
                views.map((view, index) => (
                    <motion.div
                        key={view.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15, delay: index * 0.05 }}
                        className="break-inside-avoid"
                    >
                        <ViewContainer view={view} />
                    </motion.div>
                  
                ))}
            </AnimatePresence>
            </div>
          </div>
        </div>
      );
      
}
