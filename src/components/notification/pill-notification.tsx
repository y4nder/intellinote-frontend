import { BotMessageSquare } from "lucide-react";
import { ToastContentProps } from "react-toastify";

type PillNotificaTionProps = ToastContentProps<{
  message: string;
  milliSeconds: number;
}>;

export default function PillNotification({ closeToast, data }: PillNotificaTionProps) {
  return (
    <>
      <div
        className="rounded-full bg-primary-container/40 text-on-surface-variant p-3 group-hover:bg-primary/90 transition-all duration-300"
      >   
        <BotMessageSquare className="text-primary-hard group-hover:text-white"/>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-zinc-800">{data.message}</span>
        <span className="text-xs text-zinc-500">Ellapsed time: {data.milliSeconds} <span className="">ms</span></span>
      </div>
      <button
        onClick={closeToast}
        className="ml-auto text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
      >
        Dismiss
      </button>
    </>
  );
}
