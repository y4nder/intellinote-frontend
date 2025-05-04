import { Archive } from "lucide-react";
import { ToastContentProps } from "react-toastify";

type CustomNotificationProps = ToastContentProps<{
    title: string;
    content: string;
}>;

export default function CoolNotification({ closeToast, data }: CustomNotificationProps) {
    return (
      <div className="flex flex-col w-full">
        <h3 className="text-zinc-800 text-sm font-semibold flex items-center gap-1">
          <Archive className="size-4 text-grey-700" /> {data.title}
        </h3>
  
        <div className="pl-5 mt-2">
          <p className="text-sm">{data.content}</p>
  
          <div className="flex items-center gap-2">
            <button
              onClick={closeToast}
              className="transition-all border-none text-sm font-semibold bg-transparent border rounded-md py-2 text-indigo-600 active:scale-[.95] "
            >
              Undo
            </button>
            <button
              onClick={closeToast}
              className="transition-all border-none text-sm bg-transparent border  font-semibold rounded-md py-2 text-grey-400 active:scale-[.95] "
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    );
}