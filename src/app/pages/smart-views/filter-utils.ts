import { Note } from "@/types/note"

export type FilterProperty = "title" | "keywords" | "topics"
export type FilterOperator = "contains" | "equals" | "startsWith" | "endsWith"
export type FilterValue = string | string[] | null

export interface FilterCondition {
  id: string
  property: FilterProperty
  operator: FilterOperator
  value: FilterValue
}

export interface OperatorOption {
  value: string
  label: string
}

// Function to filter notes based on conditions
export const filterNotes = (notes: Note[], filters: FilterCondition[]): Note[] => {
  return notes.filter((note) => {
    return filters.some((filter) => {
      const { property, operator, value } = filter

      // Skip empty filters
      if (value === null || value === "" || (Array.isArray(value) && value.length === 0)) {
        return true
      }

      switch (property) {
        case "title":
          return evaluateStringCondition(note.title, operator, value as string)

        case "keywords":
          return evaluateArrayCondition(note.keywords, operator, value as string | string[])

        case "topics":
          return evaluateArrayCondition(note.topics, operator, value as string | string[])

        default:
          return true
      }
    })
  })
}

const evaluateStringCondition = (target: string, operator: FilterOperator, value: string): boolean => {
  switch (operator) {
    case "contains":
      return target.toLowerCase().includes(value.toLowerCase())
    case "equals":
      return target.toLowerCase() === value.toLowerCase()
    case "startsWith":
      return target.toLowerCase().startsWith(value.toLowerCase())
    case "endsWith":
      return target.toLowerCase().endsWith(value.toLowerCase())
    default:
      return true
  }
}

const evaluateArrayCondition = (target: string[], operator: FilterOperator, value: string | string[]): boolean => {
  const valueArray = Array.isArray(value) ? value : [value]

  switch (operator) {
    case "contains":
      return valueArray.some((val) => target.some((item) => item.toLowerCase().includes(val.toLowerCase())))
    case "equals":
      return valueArray.every((val) => target.some((item) => item.toLowerCase() === val.toLowerCase()))
    default:
      return true
  }
}

