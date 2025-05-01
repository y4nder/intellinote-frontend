export interface Tag {
    id: string;
    name: string;
    color: 'red' | 'blue' | 'yellow' | 'green' | 'purple';
  }
  
  export interface Note {
    id: string;
    title: string;
    content: string;
    tags: Tag[];
    createdAt: Date;
  }
  
  export interface Folder {
    id: string;
    name: string;
    color: 'red' | 'blue' | 'yellow' | 'green' | 'purple';
    noteCount: number;
  }
  
  export interface ChatMessage {
    id: string;
    content: string;
    isUser: boolean;
    timestamp: Date;
  }
  
  export const mockTags: Tag[] = [
    { id: '1', name: 'Important', color: 'red' },
    { id: '2', name: 'Work', color: 'blue' },
    { id: '3', name: 'Personal', color: 'yellow' },
    { id: '4', name: 'Ideas', color: 'green' },
    { id: '5', name: 'Reading', color: 'purple' }
  ];
  
  export const mockNotes: Note[] = [
    {
      id: '1',
      title: 'Project Meeting Notes',
      content: 'Summary of our weekly project meeting discussing upcoming deliverables and team responsibilities.',
      tags: [mockTags[0], mockTags[1]],
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      id: '2',
      title: 'Shopping List',
      content: 'Grocery items to buy: milk, eggs, bread, vegetables, fruits, and some snacks for movie night.',
      tags: [mockTags[2]],
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    },
    {
      id: '3',
      title: 'App Feature Ideas',
      content: 'Brainstorming new features for the app: dark mode, offline sync, custom themes, and better search.',
      tags: [mockTags[3], mockTags[1]],
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
    },
    {
      id: '4',
      title: 'Book Recommendations',
      content: 'Books I want to read: Atomic Habits, Deep Work, Project Hail Mary, The Midnight Library.',
      tags: [mockTags[4]],
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
    },
    {
      id: '5',
      title: 'Workout Plan',
      content: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Full body.',
      tags: [mockTags[2]],
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
    },
    {
      id: '6',
      title: 'Travel Plans',
      content: 'Places to visit: Japan, Norway, New Zealand, Italy. Need to check flight prices and best seasons.',
      tags: [mockTags[3], mockTags[2]],
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) // 2 weeks ago
    }
  ];
  
  export const mockFolders: Folder[] = [
    { id: '1', name: 'Work', color: 'red', noteCount: 8 },
    { id: '2', name: 'Projects', color: 'blue', noteCount: 12 },
    { id: '3', name: 'Personal', color: 'yellow', noteCount: 5 },
    { id: '4', name: 'Ideas', color: 'green', noteCount: 3 }
  ];
  