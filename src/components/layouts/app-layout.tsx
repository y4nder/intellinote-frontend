import { PropsWithChildren } from "react"
// import { SearchDialog } from "../ui/search-dialog"
import { useNotificationSocket, useStandardNotificationSocket} from "@/hooks/sockets"
import CoolNotification from "../notification/cool-notification";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import PillNotification from "../notification/pill-notification";

const AppLayout = ({ children }: PropsWithChildren) => {
  const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
  

  // todo change to proper standard socket
  useStandardNotificationSocket((notification) => {
    console.log("global notif:", notification, "selected:", selectedNote);
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
        position: 'bottom-center'
      })
    } else {
      console.log("skipped global notif")
    }
  })

  useNotificationSocket((notification) => {
    toast(PillNotification, {
        className: 'p-0 w-[30px] border flex items-center gap-3 rounded-full bg-red-500 px-4 py-2 shadow-md border border-zinc-200 text-sm',
        data: {
          message: notification.message,
          milliSeconds: 1
        },
        autoClose: 3000,
        closeButton:false,
        position: 'bottom-center',
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
