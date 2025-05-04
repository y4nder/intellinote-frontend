import React, { useMemo } from "react";
import { PlusCircle } from "lucide-react";
import { cn, getGradientClassesFromString } from "@/lib/utils";


type InteractiveHoverButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  const gradient = useMemo(() => {
    return getGradientClassesFromString("optimizes path");
  }, []);

  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto antialiased cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
        "bg-primary-hard", "transform-gpu",
        gradient.hover,
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className={cn("h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]", gradient.base)} />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0">
          {children}
        </span>
      </div>

      <div
        className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 translate-x-full group-hover:translate-x-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        <span>{children}</span>
        <PlusCircle/>
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
