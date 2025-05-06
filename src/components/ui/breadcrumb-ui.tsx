import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { extractTitleFromSlug } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbUiProps {
  dynamicLastLabel?: React.ReactNode;
}

const STATIC_SEGMENT_LABELS: Record<string, string> = {
  folder: "Folder",
  note: "Note",
  folders: "Folders",
  "all-notes": "All Notes",
};

export function BreadcrumbUi({ dynamicLastLabel }: BreadcrumbUiProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center space-x-1 md:space-x-2">
        <BreadcrumbItem>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BreadcrumbLink asChild>
              <Link
                to="/"
                className="flex items-center gap-1 text-muted-foreground hover:text-primary"
              >
                <Home className="w-4 h-4" />
                <span className="sr-only md:not-sr-only">Home</span>
              </Link>
            </BreadcrumbLink>
          </motion.div>
        </BreadcrumbItem>

        {pathnames.map((segment, index) => {
          const isLast = index === pathnames.length - 1;
          const to = "/" + pathnames.slice(0, index + 1).join("/");

          const label =
            STATIC_SEGMENT_LABELS[segment] || extractTitleFromSlug(segment);
          return (
            <motion.div
              key={to}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * (index + 1) }}
              className="flex items-center gap-1 md:gap-2"
            >
              <BreadcrumbSeparator />
              <BreadcrumbItem>
              {isLast || !STATIC_SEGMENT_LABELS[segment] ? (
                <BreadcrumbPage className="text-foreground truncate max-w-[250px] md:max-w-[350px]">
                  {dynamicLastLabel ?? label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    to={to}
                    className="text-muted-foreground hover:text-primary truncate max-w-[150px] md:max-w-[200px]"
                  >
                    {label}
                  </Link>
                </BreadcrumbLink>
              )}

              </BreadcrumbItem>
            </motion.div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
