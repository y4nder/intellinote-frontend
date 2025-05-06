import { PropsWithChildren } from "react"
import { SearchDialog } from "../ui/search-dialog"
import { useNotificationSocket, useStandardNotificationSocket} from "@/hooks/sockets"
import CoolNotification from "../notification/cool-notification";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const AppLayout = ({ children }: PropsWithChildren) => {
  const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
  

  // todo change to proper standard socket
  useStandardNotificationSocket((notification) => {
    console.log("global notif:", notification, "selected:", selectedNote);
    if(selectedNote?.id !== notification.id){
      toast(      
        <CoolNotification 
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
    console.log("initialized socket", notification);
    toast(      
      <CoolNotification 
        title={""} 
        content={notification.message} 
        name={""} 
        id={""}
      />,{
      autoClose: 2000,
      position: 'bottom-left'
    })
    
  })

  return (
    <div className="">
        <main>
            <SearchDialog/>
            {children}
        </main>
    </div>
  )
}

export default AppLayout
