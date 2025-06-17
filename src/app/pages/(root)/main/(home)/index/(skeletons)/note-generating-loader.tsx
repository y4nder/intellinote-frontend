import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a <Skeleton /> or similar
import { cn, getGradientClassesFromString } from "@/lib/utils";
import { SparklesText } from "@/components/magicui/sparkles-text";


interface NoteSummaryLoadingProps {
    type: "Loading" | "Summarizing"
}

export default function NoteSummaryLoading(props: NoteSummaryLoadingProps = {type: "Loading"}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex flex-col gap-3 mt-3 py-4 px-4 rounded-3xl 
                bg-gradient-to-b from-white to-[#ECE4FF] 
                dark:bg-gradient-to-b dark:from-[#1C1B1F] dark:to-[#2A2730] 
                text-gray-900 dark:text-gray-100"
    >
      {/* Simulated Keyword Badges */}
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className={cn(`w-[16%]`,"h-5", "bg-gradient-to-br",getGradientClassesFromString(Date.now.toString() + i.toString()).base)} />
        ))}
      </div>

      {/* Loading Summary Header and Paragraph */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2">
            {/* <h1 className="text-primary-hard text-lg font-medium">Summarizing</h1> */}
            <SparklesText sparklesCount={4} className="text-lg text-primary-hard dark:text-primary">
                <p className="font-medium">
                    {props.type === "Loading" ? "Preparing your note" : "Summarizing for you"}
                </p>
            </SparklesText>
            <div className="flex items-center space-x-1 mt-2">
                <span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.1s]" />
                <span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.2s]" />
                <span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.3s]" />
            </div>
        </div>
        <Skeleton className="bg-red-200 h-4 w-full max-w-md" />
        <Skeleton className="bg-lime-200 h-4 w-full max-w-sm" />
        <Skeleton className="bg-pink-200 h-4 w-full max-w-lg" />
      </div>

      {/* Animated Topic Chips Placeholder */}
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap gap-2 mt-3"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.span
            key={index}
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className={cn("px-3 py-0.5 my-0.5 rounded-full text-xs font-medium animate-pulse","bg-gradient-to-l",getGradientClassesFromString(Date.now.toString() + index.toString()).base + "10"  )}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
