
import { Note } from "@/types/note";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import { GradientBadge } from "../ui/gradient-badge";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const { title, content, tags, createdAt } = note;

  const getTimeAgo = (date: string) => {
    const dateObj = new Date(date);
    return formatDistanceToNow(dateObj, { addSuffix: false });
  };

  const formattedTimeAgo = getTimeAgo(createdAt);
  const displayTime = formattedTimeAgo === "less than a minute"
    ? "just now"
    : formattedTimeAgo === "about 1 hour"
    ? "1h ago"
    : formattedTimeAgo.includes("day")
    ? formattedTimeAgo.replace(" days", "d").replace(" day", "d") + " ago"
    : formattedTimeAgo.includes("month")
    ? formattedTimeAgo.replace(" months", "mo").replace(" month", "mo") + " ago"
    : formattedTimeAgo.includes("year")
    ? formattedTimeAgo.replace(" years", "y").replace(" year", "y") + " ago"
    : formattedTimeAgo.includes("hour")
    ? formattedTimeAgo.replace(" hours", "h").replace(" hour", "h") + " ago"
    : formattedTimeAgo.includes("minute")
    ? formattedTimeAgo.replace(" minutes", "m").replace(" minute", "m") + " ago"
    : formattedTimeAgo + " ago";

  return (
    <div className="bg-white rounded-3xl md:max-w-sm lg:max-w-sm shadow-sm hover:shadow-md transition-all  cursor-pointer group active:scale-95">
      <div className="bg-primary-fixed h-[40px] rounded-t-3xl"/>
      <div className="p-5 flex flex-col justify-between">
        <div className="mb-3 flex justify-between items-start">
          <h3 className="font-medium text-on-primary-container group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="h-5 w-5" />
          </div>
        </div>
        <p className="text-on-surface-variant/80 text-xs mb-4 line-clamp-4">{content}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <GradientBadge key={index} label={tag}/>
            ))}
          </div>
          <span className="text-gray-400 text-xs">{displayTime}</span>
        </div>
      </div>
    </div>
  );
}

      