import { Folder } from "@/types/folder";
import { Note } from "@/types/note";

  
// export const mockTags = [
//   { id: '1', name: 'Important', color: 'red' },
//   { id: '2', name: 'Work', color: 'blue' },
//   { id: '3', name: 'Personal', color: 'yellow' },
//   { id: '4', name: 'Ideas', color: 'green' },
//   { id: '5', name: 'Reading', color: 'purple' }
// ];

  
export const mockTags = ['Important', 'Work', 'Personal', 'Ideas', 'Reading'];
  
export const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Project Meeting Notes',
    content: 'Summary of our weekly project meeting discussing upcoming deliverables and team responsibilities.',
    tags: [mockTags[0], mockTags[1]],
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
  },
  {
    id: '2',
    title: 'Shopping List',
    content: 'Grocery items to buy: milk, eggs, bread, vegetables, fruits, and some snacks for movie night.',
    tags: [mockTags[2]],
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() // 1 day ago
  },
  {
    id: '3',
    title: 'App Feature Ideas',
    content: 'Brainstorming new features for the app: dark mode, offline sync, custom themes, and better search.',
    tags: [mockTags[3], mockTags[1]],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
  },
  {
    id: '4',
    title: 'Book Recommendations',
    content: 'Books I want to read: Atomic Habits, Deep Work, Project Hail Mary, The Midnight Library.',
    tags: [mockTags[4]],
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() // 1 week ago
  },
  {
    id: '5',
    title: 'Workout Plan',
    content: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Full body.',
    tags: [mockTags[2]],
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() // 1 week ago
  },
  {
    id: '6',
    title: 'Travel Plans',
    content: 'Places to visit: Japan, Norway, New Zealand, Italy. Need to check flight prices and best seasons.',
    tags: [mockTags[3], mockTags[2]],
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString() // 2 weeks ago
  },
  {
    id: '7',
    title: 'Team Retrospective',
    content: 'Feedback from the last sprint: improve communication, define clearer priorities, and celebrate wins.',
    tags: [mockTags[0], mockTags[1]],
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString() // 10 days ago
  },
  {
    id: '8',
    title: 'Gift Ideas',
    content: 'Birthday gift ideas: books, tech gadgets, personalized items, and travel accessories.',
    tags: [mockTags[2]],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() // 5 days ago
  },
  {
    id: '9',
    title: 'Learning React',
    content: 'Topics to cover: hooks, state management, component architecture, performance optimizations.',
    tags: [mockTags[3]],
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString() // 6 days ago
  },
  {
    id: '10',
    title: 'Finances & Budget',
    content: 'Monthly budget review: income, fixed expenses, savings, investments, and discretionary spending.',
    tags: [mockTags[4]],
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString() // 15 days ago
  }
];


export const mockFolders: Folder[] = [
  { id: '1', name: 'Work', color: 'red', noteCount: 8 },
  { id: '2', name: 'Projects', color: 'blue', noteCount: 12 },
  { id: '3', name: 'Personal', color: 'yellow', noteCount: 5 },
  { id: '4', name: 'Ideas', color: 'green', noteCount: 3 },
  { id: '5', name: 'Travel', color: 'purple', noteCount: 7 },
  { id: '6', name: 'Finance', color: 'blue', noteCount: 4 },
  { id: '7', name: 'Learning', color: 'red', noteCount: 9 },
  { id: '8', name: 'Health', color: 'green', noteCount: 2 },
  { id: '9', name: 'Shopping', color: 'yellow', noteCount: 6 },
  { id: '10', name: 'Misc', color: 'purple', noteCount: 1 },
];

export const mockResponses = [
  "I can help you organize your notes better! Would you like some suggestions?",
  "Have you tried using tags to categorize your notes?",
  "You can create folders to group related notes together.",
  "Would you like me to help you search for specific notes?",
  "Is there anything specific you'd like to know about note organization?",
];