import { cn, getGradientClassesFromString } from "@/lib/utils";


export function GradientBadge({ label }: { label: string }) {
    const gradientClass = getGradientClassesFromString(label);
    return (
      <span className={cn("text-white px-2 py-1 rounded-md text-[10px] font-mono truncate max-w-48  hover:-translate-y-0.5 transition-all duration-300", gradientClass.base, gradientClass.hover,"hover:bg-none hover:outline-primary hover:outline hover:text-primary")}>
        {label}
      </span>
    );
  }

