import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"

import { BookText, Tag, Sparkles } from "lucide-react"
import { FilterCondition, filterNotes } from "./filter-utils";
import { FilteredView, setSelectedView } from "@/redux/slice/views";
import { useNavigate } from "react-router-dom";


const propertyStyles: Record<string, string> = {
    title:
      "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-200",
    keywords:
      "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-200",
    topics:
      "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-200",
}
  

function getPropertyIcon(property: string) {
  switch (property) {
    case "title":
      return <BookText size={14} />;
    case "keywords":
      return <Tag size={14} />;
    case "topics":
      return <Sparkles size={14} />;
    default:
      return null;
  }
}

function formatCondition(condition: FilterCondition) {
  const label = condition.property.charAt(0).toUpperCase() + condition.property.slice(1)
  const value = Array.isArray(condition.value)
    ? condition.value.join(", ")
    : condition.value ?? "(none)"
  return `${label} ${condition.operator} "${value}"`
}



type ViewPageProps = {
    view: FilteredView
}

export default function ViewCard({ view  }: ViewPageProps) {
    const { notes } = useSelector((state: RootState) => state.folderNotes)
    const matchedNotes = filterNotes(notes, view.conditions)

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSelectedView = () => {
        dispatch(setSelectedView(view));
        navigate(`/view/${view.id}`);
    }


    return (
        <div
            className="bg-surface-container-high w-full max-w-sm min-h-[100px] p-4 rounded-2xl cursor-pointer hover:-translate-y-0.5 transition-transform hover:bg-surface-container-highest border border-outline/10 shadow-sm overflow-hidden"
            onClick={handleSelectedView}
        >
            {/* Header: View Name + Note Count */}
            <div className="flex justify-between items-center mb-3">
            <div className="text-on-surface font-semibold text-base">{view.name}</div>
            <div className="text-xs text-on-surface-variant">
                {matchedNotes.length} note{matchedNotes.length !== 1 ? "s" : ""}
            </div>
            </div>

            {/* Conditions */}
            <div className="flex flex-wrap gap-2">

            {view.conditions.slice(0, 3).map((condition: FilterCondition) => {
                const colorStyle = propertyStyles[condition.property] || "bg-gray-100 text-gray-800"
                return (
                    <div
                        key={condition.id}
                        className={`flex items-center gap-1 px-2 py-1 rounded-xl text-xs ${colorStyle} border border-outline/5`}
                    >
                        {getPropertyIcon(condition.property)}
                        {Array.isArray(condition.value) && condition.property === "topics" ? (
                            <div className="flex items-center gap-1 flex-wrap max-w-[200px]">
                                {condition.value.slice(0, 3).map((topic, idx) => (
                                    <span
                                        key={idx}
                                        title={topic}
                                        className="truncate max-w-[60px] inline-block"
                                    >
                                        {topic}
                                        {idx < Math.min(2, condition.value!.length - 1) && ","}
                                    </span>
                                ))}
                                {condition.value.length > 3 && (
                                    <span className="italic text-on-surface-variant">+{condition.value.length - 3} more</span>
                                )}
                            </div>
                        ) : (
                            <span className="truncate max-w-[220px]">{formatCondition(condition)}</span>
                        )}
                    </div>
                )
            })}

            {view.conditions.length > 3 && (
                <div className="text-xs italic text-on-surface-variant">
                    +{view.conditions.length - 3} more
                </div>
            )}

            </div>
        </div>
    )
}



    