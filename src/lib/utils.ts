import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const gradients = [
  "from-purple-600 to-blue-500",
  "from-cyan-500 to-blue-500",
  "from-green-400 to-blue-600",
  "from-purple-500 to-pink-500",
  "from-pink-500 to-orange-400",
  "from-teal-200 to-lime-200",
  "from-red-200 via-red-300 to-yellow-200",
  "from-indigo-500 to-indigo-300",
  "from-rose-400 to-pink-300",
  "from-amber-300 to-lime-400",
  "from-sky-500 to-indigo-500",
  "from-yellow-400 to-orange-500",
  "from-lime-300 to-emerald-400",
  "from-fuchsia-500 to-pink-500",
  "from-violet-500 to-indigo-500",
  "from-emerald-400 to-cyan-500",
];


export function getGradientClassesFromString(input: string): {
  base: string;
  hover: string;
} {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % gradients.length;
  const nextIndex = (index + 1) % gradients.length;

  return {
    base: `bg-gradient-to-br ${gradients[index]}`,
    hover: `hover:bg-gradient-to-br hover:${gradients[nextIndex]}`,
  };
}

export function extractTitleFromSlug(slug: string): string {
  // Match everything before the last UUID pattern
  const guidRegex = /-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  const titlePart = slug.replace(guidRegex, "");

  return titlePart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function extractIdFromSlug(slug: string): string | null {
  const match = slug.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);
  return match ? match[0] : null;
}
