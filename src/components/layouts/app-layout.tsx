import { PropsWithChildren } from "react"
import { SearchDialog } from "../ui/search-dialog"
import { useNotificationSocket } from "@/hooks/sockets"

import CoolNotification from "../notification/notification-component-new";
import { toast } from "react-toastify";

const AppLayout = ({ children }: PropsWithChildren) => {
  useNotificationSocket((notification) => {
    toast(CoolNotification, {
      data: {
        title: notification.message,
        content: `connected on ${new Date(notification.dateTime)}`,
      },
      autoClose: 1000,
      position: 'bottom-center'
    });
  });

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
