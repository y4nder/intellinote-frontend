import { Note } from "@/data/mockData";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal } from "lucide-react";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const { title, content, tags, createdAt } = note;

  const getTimeAgo = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: false });
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
    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="mb-3 flex justify-between items-start">
        <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="h-5 w-5" />
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{content}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className={`px-2 py-1 tag-${tag.color} text-xs rounded-md`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <span className="text-gray-400 text-xs">{displayTime}</span>
      </div>
    </div>
  );
}
