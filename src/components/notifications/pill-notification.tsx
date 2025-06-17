import { BotMessageSquare, XIcon } from "lucide-react";
import { ToastContentProps } from "react-toastify";

type PillNotificaTionProps = ToastContentProps<{
  message: string;
  milliSeconds: number;
}>;

export default function PillNotification({ closeToast, data }: PillNotificaTionProps) {
  return (
    <>
      <div
        className="rounded-full bg-primary-container text-on-surface-variant p-3 group-hover:bg-primary/90 transition-all duration-300"
      >   
        <BotMessageSquare className="text-primary-hard dark:text-on-primary-container group-hover:text-white"/>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-on-primary-container">{data.message}</span>
        <span className="text-xs text-secondary">Ellapsed time: <span className="text-primary">{data.milliSeconds}ms</span></span>
      </div>
      <button
        onClick={closeToast}
        className="ml-auto text-xs text-on-primary-container hover:text-surface-bright transition-colors"
      >
        <XIcon/>
      </button>
    </>
  );
}
