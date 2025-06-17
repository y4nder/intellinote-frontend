import FolderCard from "@/components/foldercard/FolderCard";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { RootState } from "@/redux/store";
import { Folder } from "@/types/folder";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
};

export default function Folders() {
    const {folders} = useSelector((state: RootState) => state.folderNotes);
    return (
        <div className="px-6 pb-6">
            <div className=" pb-4">
                <BreadcrumbUi/>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary-hard dark:text-primary-fixed-dim">
                All Folders
            </h2>
            <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {folders.map((folder: Folder) => (
                        <motion.div key={folder.id} variants={itemVariants}>
                            <FolderCard folder={folder} />
                        </motion.div>
                    ))}
            </motion.div>
        </div>
    )
}