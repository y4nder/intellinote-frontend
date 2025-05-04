import { Archive } from "lucide-react";
import { ToastContentProps } from "react-toastify";

type PillNotificaTionProps = ToastContentProps<{
  message: string;
  milliSeconds: number;
}>;

export default function PillNotification({ closeToast, data }: PillNotificaTionProps) {
  return (
    <>
      <Archive className="h-4 w-4 text-zinc-500" />
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
