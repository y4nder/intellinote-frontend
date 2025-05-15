import { PropsWithChildren } from "react"
// import { SearchDialog } from "../ui/search-dialog"
import { useNotificationSocket, useStandardNotificationSocket} from "@/hooks/sockets"
import CoolNotification from "../notification/cool-notification";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import PillNotification from "../notification/pill-notification";
import { useTheme } from "@/providers/theme";

const AppLayout = ({ children }: PropsWithChildren) => {
  const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
  const {getTheme} = useTheme();
  const isDark = getTheme() === "dark";
  

  // todo change to proper standard socket
  useStandardNotificationSocket((notification) => {
    console.log("global notif:", notification.id, "selected:", selectedNote?.id);
    if(selectedNote?.id !== notification.id){
      toast(      
        <CoolNotification
          type={notification.type} 
          title={notification.title} 
          content={notification.message} 
          name={notification.name} 
          id={notification.id}
        />,{
        autoClose: 8000,
        className:"bg-surface",
        position: 'bottom-center',
        theme: isDark ? "dark" : "light"
      })
    } else {
      console.log("skipped global notif")
    }
  })

  useNotificationSocket((notification) => {
    toast(PillNotification, {
        className: 'p-0 min-w-[200px] flex items-center gap-3 rounded-full px-4 py-2 shadow-md text-sm',
        data: {
          message: notification.message,
          milliSeconds: 1
        },
        autoClose: 1000,
        closeButton:false,
        position: 'bottom-left',
        theme: isDark ? "dark" : "light",
    });
    
  })

  return (
    <div className="">
        <main>
            {/* <SearchDialog/> */}
            {children}
        </main>
    </div>
  )
}

export default AppLayout
