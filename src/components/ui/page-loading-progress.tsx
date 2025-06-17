import { cn, gradientsCombos } from "@/lib/utils";
import { motion, useAnimation, HTMLMotionProps } from "framer-motion";
import React, { useEffect, useMemo, useRef } from "react";

interface PageLoadingProgressProps extends HTMLMotionProps<"div"> {
  loading: boolean;
}

export const PageLoadingProgress = React.forwardRef<
  HTMLDivElement,
  PageLoadingProgressProps
>(({ className, loading, ...props }, ref) => {
  const controls = useAnimation();
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  useEffect(() => {
    if (!hasMounted.current) return;

    if (loading) {
      controls.start({
        scaleX: [0, 0.4, 0.7, 1],
        transition: {
          duration: 1.2,
          times: [0, 0.4, 0.8, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls
        .start({
          scaleX: 1,
          transition: { duration: 0.3 },
        })
        .then(() =>
          controls.start({
            opacity: 0,
            transition: { duration: 0.3 },
          })
        );
    }
  }, [loading, controls]);

  

  const randomGradient = useMemo(() => {
    const index = Math.floor(Math.random() * gradientsCombos.length);
    return gradientsCombos[index];
  }, []);

  return (
    <motion.div
      ref={ref}
      className={cn(
        `fixed inset-x-0 top-0 z-50 h-[2.5px] origin-left bg-gradient-to-r ${randomGradient}`,
        className
      )}
      initial={{ scaleX: 0, opacity: 1 }}
      animate={controls}
      {...props}
    />
  );
});

PageLoadingProgress.displayName = "PageLoadingProgress";
