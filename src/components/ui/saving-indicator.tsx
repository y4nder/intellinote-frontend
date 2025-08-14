import { RootState } from "@/redux/store";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

export default function SavingIndicator() {
	const { isSaving } = useSelector((state: RootState) => state.folderNotes);
	return (
		<AnimatePresence
			mode="sync"
			initial={false}
		>
			{isSaving ? (
				<motion.div
					key="saving"
					initial={{ opacity: 0, x: 10 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -10 }}
					className="flex items-center gap-1 text-sm text-primary"
				>
					<Loader2 className="w-4 h-4 animate-spin" />
					<span>Saving...</span>
				</motion.div>
			) : (
				<motion.div
					key="saved"
					initial={{ opacity: 0, x: 10 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -10 }}
					className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400"
				>
					<CheckCircle className="w-4 h-4" />
					<span>Saved</span>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
