import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Plus, EditIcon, PlusIcon } from "lucide-react"
import type { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import NotePreviewSection from "./note-preview-section"
import { Note } from "@/types/note"
import { FilterCondition, filterNotes, FilterProperty, OperatorOption, FilterOperator } from "./filter-utils"
import { addView, FilteredView, updateView } from "@/redux/slice/views"


type CreateViewModalProps = {
  isUpdating: boolean;
  view?: FilteredView | null;
}

export default function CreateViewModal({isUpdating = false, view = null} : CreateViewModalProps) {
  const { notes } = useSelector((state: RootState) => state.folderNotes)
  const [isOpen, setIsOpen] = useState(false)
  const [viewName, setViewName] = useState<string>(
    () => view?.name ?? ""
  );
  const [filters, setFilters] = useState<FilterCondition[]>(
    () =>
      view?.conditions.map(cond => ({
        ...cond,
      })) ?? [
        { id: Date.now().toString(), property: "title", operator: "contains", value: "" },
      ]
  );

  const [filteredNotes, setFilteredNotes] = useState<Note[]>([])
  const dispatch = useDispatch();

  useEffect(() => {
    if (view) {
      setViewName(view.name);
      setFilters(
        view.conditions.map(cond => ({
          ...cond,
          id: cond.id ?? Date.now().toString(),
        }))
      );
    }
  }, [view]);

  // Memoize filter results to prevent infinite recursion
  useEffect(() => {
    // Only run filtering when filters or notes change
    const validFilters = filters.filter(
      (f) => f.value !== null && f.value !== "" && !(Array.isArray(f.value) && f.value.length === 0),
    )

    if (validFilters.length === 0) {
      setFilteredNotes(notes)
    } else {
      const filtered = filterNotes(notes, validFilters)
      setFilteredNotes(filtered)
    }
  }, [filters, notes])

  
  const addFilter = () => {
    const newFilter: FilterCondition = {
      id: Date.now().toString(),
      property: "title",
      operator: "contains",
      value: "",
    }
    setFilters([...filters, newFilter])
  }

  const removeFilter = (id: string) => {
    setFilters(filters.filter((filter) => filter.id !== id))
  }

  const updateFilter = (id: string, updates: Partial<FilterCondition>) => {
    setFilters(filters.map((filter) => (filter.id === id ? { ...filter, ...updates } : filter)))
  }

  const getOperatorOptions = (property: FilterProperty): OperatorOption[] => {
    switch (property) {
      case "keywords":
      case "topics":
        return [
          { value: "contains", label: "contains" },
          { value: "equals", label: "equals" },
        ]
      default:
        return [
          { value: "contains", label: "contains" },
          { value: "equals", label: "equals" },
          { value: "startsWith", label: "starts with" },
          { value: "endsWith", label: "ends with" },
        ]
    }
  }

  const handleCreateView = () => {
    // Create a stringified object with the filter conditions
    const filterObject : FilteredView = {
      id: new Date().toISOString() + "_" + Math.random().toString(),
      name: viewName,
      conditions: filters.map((filter) => ({
        id: filter.id,
        property: filter.property,
        operator: filter.operator,
        value: filter.value,
      })),
    }

    dispatch(addView(filterObject));

    console.log("Created view:", JSON.stringify(filterObject, null, 2))
    setIsOpen(false)
  }

  const handleUpdateView = () => {
    if(!view) return;
    const filterObject : FilteredView = {
      id: view.id,
      name: viewName,
      conditions: filters.map((filter) => ({
        id: filter.id,
        property: filter.property,
        operator: filter.operator,
        value: filter.value,
      })),
    }
    dispatch(updateView(filterObject));
    console.log("Updated view:", JSON.stringify(filterObject, null, 2))
    setIsOpen(false)
  }

  const renderFilterValueInput = (filter: FilterCondition) => {
    // Keywords and topics (array values)
    if (filter.property === "keywords" || filter.property === "topics") {
      const currentValue = Array.isArray(filter.value) ? filter.value : []

      return (
        <div className=" flex flex-col gap-2 w-full bg-background">
          <div className="flex flex-wrap gap-0.5 mb-2">
            {currentValue.map((tag, index) => (
              <Badge
                key={index}
                className="flex items-center gap-1 text-on-surface py-1 bg-surface-container rounded-full"
              >
                <span className="truncate">{tag}</span>
                <button
                  type="button"
                  aria-label={`Remove ${tag}`}
                  className="flex-shrink-0 p-1 hover:bg-red-600 hover:text-white rounded-full transition"
                  onClick={() => {
                    const newValue = [...currentValue]
                    newValue.splice(index, 1)
                    updateFilter(filter.id, { value: newValue })
                  }}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder={`Enter ${filter.property}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.target as HTMLInputElement).value.trim()) {
                  const newTag = (e.target as HTMLInputElement).value.trim()
                  updateFilter(filter.id, { value: [...currentValue, newTag] })
                  ;(e.target as HTMLInputElement).value = ""
                }
              }}
            />
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => {
                const input = e.currentTarget.previousSibling as HTMLInputElement
                if (input.value.trim()) {
                  const newTag = input.value.trim()
                  updateFilter(filter.id, { value: [...currentValue, newTag] })
                  input.value = ""
                }
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )
    }

    // Default text input
    return (
      <Input
        placeholder="Enter value"
        value={(filter.value as string) || ""}
        onChange={(e) => updateFilter(filter.id, { value: e.target.value })}
        className="w-full"
      />
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="rounded-full p-4 bg-primary shadow-lg hover:bg-primary-dark focus:outline-none cursor-pointer text-on-primary"
          aria-label={isUpdating ? "Edit View" : "Create View"}
        >
          {isUpdating ? 
          <>
            <EditIcon size={20} />
          </> : 
          <>
            <PlusIcon size={20} />
            Create A view
          </>}
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[1640px] bg-surface text-on-surface min-h-[850px]">
        <DialogHeader>
          <DialogTitle>
            {isUpdating ? <>Update View</> : <>Create View</>} 
          </DialogTitle>
          <DialogDescription>
            {isUpdating ? 
            <>Update your view to organize your notes</> 
            : <>Create your own custom view by defining filters</>} 
            
          </DialogDescription>
          {/* View name */}
        </DialogHeader>

        <div className="space-y-6 grid grid-cols-8 gap-5">
          {/* Filters section */}
          <div className="space-y-4 col-span-3">
            <div className="space-y-2 mt-2">
              <h3 className="text-sm font-medium">View name</h3>
              <Input placeholder="Enter view name" value={viewName} onChange={(e) => setViewName(e.target.value)} />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Filters</h3>
              <Button variant="outline" size="sm" onClick={addFilter}>
                <Plus className="h-4 w-4 mr-2" />
                Add filter
              </Button>
            </div>

            <div className="space-y-3 max-h-[550px] overflow-y-auto pr-2">
              {filters.map((filter) => (
                <div key={filter.id} className="flex items-start gap-2 p-3 border rounded-md">
                  {/* Property selector */}
                  <Select
                    value={filter.property}
                    onValueChange={(value: string) => {
                      const newProperty = value as FilterProperty
                      const newOperator =
                        newProperty === "keywords" || newProperty === "topics" ? "contains" : "contains"

                      const newValue = newProperty === "keywords" || newProperty === "topics" ? [] : ""

                      updateFilter(filter.id, {
                        property: newProperty,
                        operator: newOperator as FilterOperator,
                        value: newValue,
                      })
                    }}
                  >
                    <SelectTrigger className="w-fit">
                      <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface text-on-surface">
                      <SelectItem value="title">Title</SelectItem>
                      <SelectItem value="keywords">Keywords</SelectItem>
                      <SelectItem value="topics">Topics</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Operator selector */}
                  <Select
                    value={filter.operator}
                    onValueChange={(value: string) => {
                      const newOperator = value as FilterOperator
                      updateFilter(filter.id, {
                        operator: newOperator,
                      })
                    }}
                  >
                    <SelectTrigger className="w-fit">
                      <SelectValue placeholder="Select operator" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface text-on-surface">
                      {getOperatorOptions(filter.property).map((op) => (
                        <SelectItem key={op.value} value={op.value}>
                          {op.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Value input - changes based on property and operator */}
                  <div className="flex-1">{renderFilterValueInput(filter)}</div>

                  {/* Remove filter button */}
                  <Button variant="ghost" size="icon" onClick={() => removeFilter(filter.id)} className="self-center">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            {/* Preview of the filter object */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Filter preview</h3>
              <pre className="bg-surface-container-high p-4 rounded-md text-xs overflow-y-auto max-h-[250px]">
                {JSON.stringify(
                  {
                    name: viewName,
                    conditions: filters.map((filter) => ({
                      property: filter.property,
                      operator: filter.operator,
                      value: filter.value,
                    })),
                  },
                  null,
                  2,
                )}
              </pre>
            </div>
          </div>


          {/* Note preview section */}
          <div className="col-span-5">
            <NotePreviewSection filteredNotes={filteredNotes} />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            className="bg-primary-container"
            onClick={isUpdating ? handleUpdateView : handleCreateView}
            disabled={!viewName || filters.length === 0}
          >
            {isUpdating ? "Update" : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
