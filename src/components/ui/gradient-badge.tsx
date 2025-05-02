import { cn, getGradientClassesFromString } from "@/lib/utils";


export function GradientBadge({ label }: { label: string }) {
    const gradientClass = getGradientClassesFromString(label);
    return (
      <span className={cn("text-white px-3 py-1 rounded-md text-xs font-mono hover:-translate-y-0.5 transition-all duration-300", gradientClass.base, gradientClass.hover)}>
        {label}
      </span>
    );
  }

