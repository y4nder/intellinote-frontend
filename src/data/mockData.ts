
import { SummarizerMessage } from "@/providers/socket/types";
import { PromptResponse } from "@/service/nora/chat/send-chat-message";
// import { AssignNoteFolderResponse } from "@/service/notes/auto-assign-note";
// import { Folder } from "@/types/folder";
// import { GetUserNotesResponse } from "@/types/note";
  
  
export const mockTags = ['Important', 'Work', 'Personal', 'Ideas', 'Reading'];

export const mockedCreatedNote = {
    "id": "1a96c95d-cadc-4d96-b955-4d3a40778b4a",
    "title": "Untitled Note",
    "content": "[{\"type\":\"paragraph\"}]",
    "summary": null,
    "createdAt": "2025-05-04T05:50:12.0316593Z",
    "updatedAt": null,
    "author": {
      "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
      "userName": "user@example.com"
    },
    "folder": null,
    "keywords": [],
    "topics": []
}

  
// export const mockGetUserResponse: GetUserNotesResponse = {
//   "notes": [
//     {
//       "id": "df8aace4-c495-4219-9039-db6486cbdeea",
//       "title": "Project Brainstorm Ideas",
//       "createdAt": "2025-04-20T02:55:59.969059Z",
//       "updatedAt": "2025-05-01T02:28:08.841344Z",
//       "summary": "The text outlines key project ideas to explore, including an AI-powered task prioritization system, interactive data visualization dashboard, community knowledge sharing platform, personalized learning recommendation engine, and environmental impact tracking tool. It emphasizes the need to research the market viability of each concept before the next meeting.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "project ideas",
//         "environmental impact",
//         "need research",
//         "prioritization",
//         "visualization dashboard",
//         "sharing platform",
//         "engine",
//         "tracking",
//         "market",
//         "key"
//       ],
//       "topics": [
//         "Project ideas for exploration:",
//         "AI-powered task prioritization system",
//         "Interactive data visualization dashboard",
//         "Community knowledge sharing platform",
//         "Personalized learning recommendation engine",
//         "Environmental impact tracking tool",
//         "Focus areas:",
//         "Market research for each concept",
//         "Prioritization of ideas for the next meeting",
//         "Key topics:",
//         "Project ideas",
//         "Environmental impact",
//         "Need for research",
//         "Prioritization",
//         "Visualization dashboard",
//         "Sharing platform",
//         "Engine",
//         "Tracking",
//         "Market viability",
//         "Key concepts"
//       ]
//     },
//     {
//       "id": "e4f91f54-7aaa-410c-9d41-e4ea622d0917",
//       "title": "Dynamic Programming Techniques",
//       "createdAt": "2025-04-20T02:59:02.869936Z",
//       "updatedAt": "2025-05-01T02:28:08.841344Z",
//       "summary": "The text discusses dynamic programming techniques, including key principles such as breaking down problems into overlapping subproblems and storing solutions with memoization. There are two approaches to dynamic programming: top-down with memoization and bottom-up iterative building. It mentions classic problems that can be solved using dynamic programming, such as the Fibonacci sequence and knapsack problem. Implementation tips include carefully identifying state variables and defining recurrence relations. The time and space complexity of dynamic programming solutions is typically O(n) or O(n*m), and space complexity can often be optimized for 2D problems.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "dynamic programming",
//         "complexity optimized",
//         "solutions subproblems",
//         "tips include",
//         "fibonacci sequence",
//         "knapsack problem",
//         "building table",
//         "principles break",
//         "usually time",
//         "identify state"
//       ],
//       "topics": [
//         "Dynamic programming techniques",
//         "Key principles for dynamic programming",
//         "Two approaches: top-down with memoization and bottom-up iterative building",
//         "Classic problems: Fibonacci sequence and knapsack problem",
//         "Implementation tips for dynamic programming",
//         "Time and space complexity of dynamic programming solutions",
//         "Optimizing space complexity for 2D problems"
//       ]
//     },
//     {
//       "id": "e4d28684-1db3-463e-aa72-0001f7ef61a3",
//       "title": "Introduction to Artificial Intelligence",
//       "createdAt": "2025-04-30T02:41:01.252367Z",
//       "updatedAt": "2025-05-01T03:54:43.090691Z",
//       "summary": "Artificial intelligence (AI) is a field of computer science that focuses on developing machines capable of performing tasks that usually require human intelligence. There are two main categories of AI: narrow AI, which is designed for specific tasks like voice assistants or facial recognition, and general AI, which is a more advanced form designed for broader applications.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "ai refers",
//         "deep learning",
//         "categories narrow",
//         "like voice",
//         "branch computer",
//         "datasets enable",
//         "potential ethical",
//         "vehicles",
//         "financial forecasting",
//         "continues progress"
//       ],
//       "topics": [
//         "Deep Learning in AI",
//         "Branches of Computer Science",
//         "Datasets in AI",
//         "Potential Ethical Issues in AI",
//         "AI in Vehicles",
//         "AI in Financial Forecasting",
//         "Progress in AI Research"
//       ]
//     },
//     {
//       "id": "7d0c915e-f460-4e10-94da-a1d7ab350fda",
//       "title": "Binary Search Trees",
//       "createdAt": "2025-04-20T02:59:02.869936Z",
//       "updatedAt": "2025-05-01T03:54:43.090692Z",
//       "summary": "Binary search trees are a foundational data structure where each node can have at most two children: a left child and a right child. The left subtree of a node contains only nodes with keys less than the node's key, while the right subtree contains only nodes with keys greater than the node's key. Both the left and right subtrees are also binary search trees. The time complexity for searching in a binary search tree is efficient.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "binary search",
//         "trees foundational",
//         "node key",
//         "subtree contains",
//         "bsts time",
//         "right child",
//         "average worst",
//         "delete log",
//         "considerations balance",
//         "red black"
//       ],
//       "topics": [
//         "Binary search in trees",
//         "Node key and subtree",
//         "Time complexity of BSTs",
//         "Deletion considerations",
//         "Balancing BSTs",
//         "Red-black trees"
//       ]
//     },
//     {
//       "id": "ead722cc-6869-49c7-a242-36f20a49fa38",
//       "title": "Deterministic and Non-Deterministic Automata",
//       "createdAt": "2025-04-30T02:06:21.413199Z",
//       "updatedAt": "2025-05-01T03:54:43.090692Z",
//       "summary": "A deterministic finite automaton (DFA) is a type of automaton with only one transition for each state and input symbol, ensuring that a specific input string will always lead to the same result. In contrast, a non-deterministic finite automaton (NFA) allows for multiple possible transitions from a state with the same input symbol, leading to different potential states.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "finite automaton",
//         "difference deterministic",
//         "dfa known",
//         "compiler",
//         "different potential",
//         "state",
//         "contrast non",
//         "lead",
//         "key",
//         "string way"
//       ],
//       "topics": [
//         "Finite automaton vs non-deterministic finite automaton",
//         "Difference between deterministic and non-deterministic DFAs",
//         "DFAs known in compiler design",
//         "State transitions in DFAs",
//         "Contrast between deterministic and non-deterministic automata",
//         "Potential states in NFAs",
//         "How key differences in DFAs can lead to different outcomes",
//         "Analyzing string processing in DFAs"
//       ]
//     },
//     {
//       "id": "b98b1878-9da7-49e4-96dc-65d870233419",
//       "title": "Efficient Searching Algorithms",
//       "createdAt": "2025-04-20T03:01:39.784182Z",
//       "updatedAt": "2025-05-01T02:28:08.841344Z",
//       "summary": "The text outlines various efficient searching algorithms such as binary search, exponential search, ternary search, fibonacci search, hash-based searching, self-balancing tree data structures, and jump block search. It emphasizes that the time complexity of a search algorithm is influenced by factors such as data size, data distribution, array size, and the number of iterations.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "searching algorithms",
//         "use binary",
//         "overflow implemented",
//         "array size",
//         "data time",
//         "log worse",
//         "high arr",
//         "uses fibonacci",
//         "advantage works",
//         "effectively magnetic"
//       ],
//       "topics": [
//         "Efficient searching algorithms",
//         "Binary search",
//         "Exponential search",
//         "Ternary search",
//         "Fibonacci search",
//         "Hash-based searching",
//         "Self-balancing tree data structures",
//         "Jump block search",
//         "Influence of data size on time complexity",
//         "Effect of data distribution on time complexity",
//         "Impact of array size on search algorithms",
//         "Number of iterations in search algorithms"
//       ]
//     },
//     {
//       "id": "358d4ca5-6276-4e7e-8595-f013768ce7fa",
//       "title": "Hash Tables and Collision Resolution",
//       "createdAt": "2025-04-20T02:59:02.869936Z",
//       "updatedAt": "2025-05-01T02:28:08.841345Z",
//       "summary": "The text discusses hash tables and collision resolution techniques. Hash tables are a key-value storage structure with an average access time of O(1) that uses a hash function to map keys to array indices. The hash function should distribute keys uniformly. Collision resolution techniques include chaining, where each bucket contains a linked list of entries, and open addressing methods like linear probing and double hashing. Linear probing checks the next slot sequentially, while double hashing uses a second hash function for an offset.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "hash tables",
//         "collision resolution",
//         "indexing duplicate",
//         "addressing methods",
//         "storage average",
//         "chaining bucket",
//         "slots quadratic",
//         "time uses",
//         "delete worst",
//         "insert"
//       ],
//       "topics": [
//         "Hash tables and collision resolution techniques",
//         "Indexing duplicate in hash tables",
//         "Addressing methods for hash tables",
//         "Storage average in hash tables",
//         "Chaining bucket in hash tables",
//         "Slots quadratic in hash tables",
//         "Time uses in hash tables",
//         "Worst-case scenario for delete operation in hash tables",
//         "Insert operation in hash tables"
//       ]
//     },
//     {
//       "id": "52ad0b1f-f106-4ec1-92ed-5b2e37db1343",
//       "title": "Introduction to Automata Theory",
//       "createdAt": "2025-04-30T02:01:49.720296Z",
//       "updatedAt": "2025-05-01T03:54:43.090693Z",
//       "summary": "Automata theory is a key field in theoretical computer science that explores abstract computational models called automata and the languages they can recognize. This theory helps in understanding how machines compute functions and solve problems, and is essential for designing compilers, interpreters, and other computational systems.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "theory automata",
//         "software systems",
//         "theoretical limits",
//         "validate correctness",
//         "free languages",
//         "problems playing",
//         "like pushdown",
//         "foundational area",
//         "students professionals",
//         "key"
//       ],
//       "topics": [
//         "Automata Theory and its Significance in Computer Science",
//         "Exploring Software Systems through Automata Theory",
//         "Understanding Theoretical Limits in Automata Theory",
//         "Validating Correctness in Software Systems using Automata",
//         "Free Languages and their Role in Automata Theory",
//         "Analyzing Problems in Playing with Automata",
//         "Comparing Automata Models like Pushdown Automata",
//         "Exploring Automata Theory as a Foundational Area in Computer Science",
//         "Benefits of Studying Automata Theory for Students and Professionals"
//       ]
//     },
//     {
//       "id": "86e1eff3-60a4-4a21-92ec-9fd48191023c",
//       "title": "Understanding Common Data Structures in Computer Science",
//       "createdAt": "2025-04-29T21:55:32.978355Z",
//       "updatedAt": "2025-05-01T02:28:08.841344Z",
//       "summary": "The text discusses different data structures such as arrays, linked lists, stacks, queues, hash tables, trees, and graphs. Arrays are fixed-size collections of elements with constant time access, making them efficient for frequent reading. Linked lists consist of nodes pointing to the next element.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "data structures",
//         "include arrays",
//         "reading linked",
//         "allowing dynamic",
//         "different types",
//         "queues hash",
//         "follows lifo",
//         "frequent",
//         "deletion",
//         "enable developers"
//       ],
//       "topics": [
//         "Overview of data structures",
//         "Arrays: fixed-size collections with constant time access",
//         "Linked lists: nodes pointing to the next element",
//         "Stacks: follow LIFO (Last In, First Out) principle",
//         "Queues: FIFO (First In, First Out) ordering",
//         "Hash tables: enabling dynamic insertion and deletion",
//         "Trees and graphs for organizing different types of data",
//         "Importance of data structures in enabling developers"
//       ]
//     },
//     {
//       "id": "e566187c-ab68-4378-8199-54bcf84afd65",
//       "title": "Graph Traversal Algorithms",
//       "createdAt": "2025-04-20T02:59:02.869936Z",
//       "updatedAt": "2025-05-01T02:28:08.841345Z",
//       "summary": "The text discusses two key graph traversal algorithms: breadth-first search (BFS) and depth-first search (DFS). BFS uses a queue data structure to visit all neighbors before moving to the next level, with a time complexity of O(V + E) where V is vertices and E is edges. It is useful for finding the shortest path in unweighted graphs. On the other hand, DFS uses a stack and explores as far as possible along each branch, with a time complexity of O(V + E). It has applications in topological sorting and cycle detection.",
//       "folder": {
//         "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
//         "name": "Core Computer Science Concepts & Project Ideas"
//       },
//       "keywords": [
//         "graph traversal",
//         "optimizes path",
//         "dfs bfs",
//         "visits neighbors",
//         "heuristics",
//         "binary heap",
//         "detection dijkstra",
//         "uses priority",
//         "time",
//         "negative weights"
//       ],
//       "topics": [
//         "Graph Traversal Algorithms",
//         "Optimizing Path with DFS and BFS",
//         "Visiting Neighbors in Graphs",
//         "Heuristics in Graph Traversal",
//         "Binary Heap for Priority Queue",
//         "Dijkstra's Algorithm for Path Detection",
//         "Using Priority in Graph Algorithms",
//         "Handling Negative Weights in Paths"
//       ]
//     }
//   ],
//   "totalCount": 10
// }

// export const mockFolders: Folder[] = [
//   { id: '1', name: 'Work', noteCount: 8 },
//   { id: '2', name: 'Projects',  noteCount: 12 },
//   { id: '3', name: 'Personal',  noteCount: 5 },
//   { id: '4', name: 'Ideas',  noteCount: 3 },
//   { id: '5', name: 'Travel',  noteCount: 7 },
//   { id: '6', name: 'Finance',  noteCount: 4 },
//   { id: '7', name: 'Learning',  noteCount: 9 },
//   { id: '8', name: 'Health',  noteCount: 2 },
//   { id: '9', name: 'Shopping', noteCount: 6 },
//   { id: '10', name: 'Misc', noteCount: 1 },
// ];

export const mockResponses = [
  "I can help you organize your notes better! Would you like some suggestions?",
  "Have you tried using tags to categorize your notes?",
  "You can create folders to group related notes together.",
  "Would you like me to help you search for specific notes?",
  "Is there anything specific you'd like to know about note organization?",
];

export const sampleBlockNote = [
  {
    "id": "902c20e9-cb7c-4c2a-a21d-fbf576aafe68",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 2
    },
    "content": [
      {
        "type": "text",
        "text": "Author and Context",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "98a34035-ba0e-49c1-b516-4b18fd7c123d",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Dante Alighieri",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "9e755435-2685-45d2-b18d-e3cc327356d5",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Italian poet and moral philosopher. Considered the father of modern Italian. Born in Florence, Italy, in 1265.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "173affe2-05ca-45ea-af44-c0732bc46823",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The Divine Comedy",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "292418e2-4f19-4f2d-9516-76dde4680da0",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Epic poem by Dante. Comprises three sections: ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Inferno",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ", ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Purgatorio",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ", and ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Paradiso",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "18e33dda-c07d-4ae8-8e5e-3cb2e2fbb1b4",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "A great work of medieval literature and the greatest work in Italian.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "d44eb531-5049-4557-8224-897617da0617",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "A philosophical Christian vision of mankind’s eternal fate. Written during Dante's exile.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "75d857fa-8f9e-4922-9269-c341cf8cc1cc",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Inferno",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "8ecfa566-234f-4eb8-a847-0de2eacae7cb",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The first part of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "The Divine Comedy",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "aa158363-eea9-4837-ab6c-c05a73c3b0bd",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "An allegory of Dante's journey through Hell, representing the recognition and rejection of sin.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "8ac4a8ba-679c-43d7-af97-79ba2fca14d6",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Completed by 1314.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "3e486e24-ed45-4b5d-a97e-721cda5eb659",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Allegory",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "f3d0e849-4b71-4fca-aa5b-721dac52a7b8",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The Divine Comedy",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " is an allegorical journey through the Christian afterlife, written to guide a corrupt society toward righteousness.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "82353f15-de17-4b85-9260-a16525418a6c",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Inferno",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " specifically represents the Christian soul seeing sin for what it truly is.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "22e02675-3a8d-40f0-abb3-20376c7ebe87",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Setting",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "3e81ae20-1521-4a15-bf4c-8490c6675cf8",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Hell, depicted as nine circles of suffering located within the Earth, largely based on the medieval concept of Hell.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "028dd0b2-3b98-44d5-829e-ecaf10b23e63",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Time Frame of Narrative",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "a98ad98d-2cea-4d3a-8ad0-99159e75ab82",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The journey through Hell occurs from the night before Good Friday to the Wednesday after Easter, in the year 1300.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "3f8c0ed9-bbca-40b5-ab96-f35c529f507b",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Terza Rima",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "026c4547-8642-4afd-a91d-c57c42669746",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The poetic form Dante invented, used throughout ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "The Divine Comedy",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "78a9b522-6e80-4162-8d8a-7df4aea3680c",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The work consists of 100 cantos in this form.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "9464530b-e449-4660-b715-7b08df1e3a9b",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 2
    },
    "content": [
      {
        "type": "text",
        "text": "Key Characters",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "749e9482-5f31-4c14-b679-50e712fa2873",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Dante",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "9489c061-d006-407b-8b58-0ad16e02219c",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The pilgrim protagonist who journeys through Hell, Purgatory, and Heaven.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "05b239ac-4744-4271-9c74-40d9093dda84",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Represents a soul recognizing and confronting sin",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "9aa0bab3-a831-4bdc-a65b-3367ad956783",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Virgil",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "68c90c2c-d3b6-4bef-af9c-4c9da97062ca",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Roman poet who guides Dante through Hell and Purgatory.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "6d9ee0a2-9cde-4159-81d2-3b6f9c708825",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Represents human reason and wisdom. Resides in Limbo.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "e474a84c-7a8e-4ed5-ab5b-3ae0746bbb04",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Beatrice",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "d8489dfe-27eb-4fbe-a73b-98db3e839b8b",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Dante's love who influenced his work. Guides Dante through Paradise.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "fe131159-0002-483b-be56-1e5b15cbc8cb",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Symbolizes the path to God.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "4c874ae5-27b8-430f-97e7-f37f4a5f89c2",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Minos",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "6c68c4bd-c0b0-4de3-a087-5b22a491caf5",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Judges the damned souls and assigns them to a circle of Hell by wrapping his tail around himself.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "5954a19a-b269-4b36-9a77-d8fc15463112",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Charon",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "5003293e-161b-4c67-b5a4-e0eb363aa750",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Ferries souls across the river Acheron into Hell proper.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "905b2a9c-0e4b-4be3-8ba1-5eb43b14ac97",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Cerberus",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "f61361d4-49a8-4349-a1e3-e4baa3669f8b",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Three-headed dog who guards the gluttons in the Third Circle.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "a420637a-42a4-4f3e-9748-fe8d3512c8c7",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Plutus",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "941f4870-4f7f-4203-a895-9918f567d64a",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Greek god of wealth who guards the Fourth Circle of Greed.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "ebd28b6d-eb63-4f50-b579-f225569d1386",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Phlegyas",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "3626b630-8b15-4425-9c9d-1ff189b2f37c",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Boatman of the river Styx who transports Dante and Virgil across to the City of Dis.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "e67bcbf3-6c61-4e99-93ce-fe1f9dd09800",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Furies and Medusa",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "88c9a607-4dfb-41be-8386-f4048056aa41",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Guard the walls of the City of Dis and threaten Dante.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "0a94c8e3-e86d-4201-9053-2880f7a4668b",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Angel from Heaven",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "107cc541-d8a6-48d5-ad65-e30f8565538b",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Secures entry into the City of Dis for Dante and Virgil.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "ed952080-da2d-4f19-b031-c169785973ad",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Geryon",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "cf524731-bc69-481b-ae08-acd501a3e91d",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Winged monster representing fraud who transports Dante and Virgil to the Eighth Circle.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "faf1f25a-eb25-4e63-87a1-f6d02b4fafe0",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Malebranche",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "a092bf93-81c2-4e59-b644-b1e17907bc8c",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Devils who guard the barrators (corrupt politicians) in the Fifth Bolgia of the Eighth Circle. Their leader is Malacoda.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "ad9892f8-8975-41e3-9040-fc44f9fd45cf",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Cacus",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "5cceb268-21b2-4b2d-acc9-42f098193a84",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Centaur guarding the thieves in the Seventh Bolgia of the Eighth Circle, with a fire-breathing dragon on his shoulders.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "aac098c7-e8a2-4653-ac0d-02af10554ee1",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Giants",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "e6739a18-905b-411e-8c07-32faf1102760",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Ring the Ninth Circle, symbolizing pride behind treachery.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "997b594a-05d0-434a-afc7-87554e00008c",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Satan (Lucifer)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "d04c15a1-5b59-40bc-8513-923151ac5bff",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Trapped in the center of Hell (Ninth Circle, Judecca) for the ultimate sin of treachery against God.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "826cb6f9-d51b-4628-a3a5-81ef81a33cf5",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "A giant beast with three faces, chewing on Judas, Brutus, and Cassius.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "6e5a1401-2445-4df3-9e1f-15cceb8e88e1",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 2
    },
    "content": [
      {
        "type": "text",
        "text": "Structure of Hell",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "3e8ba02e-08d8-45ac-94d3-e2311fbb74ee",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Nine Circles of Hell",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "fce6b45f-ca75-4322-966d-405f41ac5812",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Structured in descending order of sinfulness: incontinence, violence, and fraud.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "8bd28cff-4ea3-4b7d-aed9-de93030e5d81",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Upper Hell (First Five Circles)",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "8a988f2f-ec6d-42bb-ba58-643b59fb734f",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "First Circle (Limbo)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "43108e0a-381b-441a-b2ed-e83bf75df354",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Unbaptized and virtuous pagans (e.g., Virgil, Homer, Aristotle).",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "9978d79b-c544-419f-bd6d-69d3f30c2a73",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "They are not actively punished but grieve their separation from God.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "b1761b28-c67c-43b4-982f-d129c1f0ad82",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Second Circle (Lust)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "0e2ae1db-5d8a-4460-92df-bcd1ed67f8d6",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Souls blown about by violent winds.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "db657708-9551-4d42-a6fa-9e5a2135aa4b",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Includes Semiramis, Dido, Cleopatra, Helen of Troy, Achilles, Paris, Tristan, Francesca da Rimini, and Paolo Malatesta.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "19db703a-c610-4694-bfa2-8f8006b6bd01",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Third Circle (Gluttony)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "5ac16552-1bbb-492e-a416-88540fed959d",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Gluttons lie in vile slush produced by icy rain, guarded by Cerberus.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "0aea79a9-1b11-4d68-866e-37bf02d16414",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Includes Ciacco.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "9b88d746-1bb5-42a1-ad02-157950704bca",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Fourth Circle (Greed)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "2efecb06-3b40-4469-bb2b-8b882ca766f6",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The avaricious and prodigal joust with heavy weights, guarded by Plutus.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "6e5eb431-24c6-4d6c-be24-1c2db068f8ae",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Fifth Circle (Anger)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "ff1244c2-1341-4c94-8851-91a3f5018515",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The wrathful fight on the river Styx, and the sullen gurgle beneath it.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "d265632e-6058-4fd4-8e58-e31f67ae861d",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Transported by Phlegyas. Includes Filippo Argenti.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "e86f092b-30bd-422f-a1f3-026babae019c",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Lower Hell (City of Dis)",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "fe8dbd8b-c52d-48ce-80da-5c22f0ccf87e",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Sixth Circle (Heresy)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "a42c9812-b153-4557-bcf4-47ffa91be8e3",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Heretics trapped in flaming tombs (e.g., Farinata degli Uberti, Cavalcante).",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "5d454432-c706-4710-b2b6-54c9db58ba39",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Seventh Circle (Violence)",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "4de1413e-28c0-4f61-bc1f-4a26c0c14bc1",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Guarded by the Minotaur and divided into three rings:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "b8e532ac-8926-4336-8442-b9fd287fd77d",
        "type": "paragraph",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Outer Ring",
            "styles": {
              "bold": true
            }
          }
        ],
        "children": [
          {
            "id": "643741a7-1012-4cab-9e8a-3c7ce03dea8f",
            "type": "paragraph",
            "props": {
              "textColor": "default",
              "backgroundColor": "default",
              "textAlignment": "left"
            },
            "content": [
              {
                "type": "text",
                "text": "Violent against people/property, immersed in boiling blood (Phlegethon).",
                "styles": {}
              }
            ],
            "children": []
          },
          {
            "id": "b1cd6bd8-fa2e-43fd-b32e-a158fa75d426",
            "type": "paragraph",
            "props": {
              "textColor": "default",
              "backgroundColor": "default",
              "textAlignment": "left"
            },
            "content": [
              {
                "type": "text",
                "text": "Includes Alexander the Great. Guarded by Centaurs led by Chiron.",
                "styles": {}
              }
            ],
            "children": []
          },
          {
            "id": "1850329e-e79f-4d85-a926-5a1e2d9f804a",
            "type": "bulletListItem",
            "props": {
              "textColor": "default",
              "backgroundColor": "default",
              "textAlignment": "left"
            },
            "content": [
              {
                "type": "text",
                "text": "Middle Ring",
                "styles": {
                  "bold": true
                }
              }
            ],
            "children": [
              {
                "id": "727799ac-eb86-4a98-a057-0137aa83fcec",
                "type": "paragraph",
                "props": {
                  "textColor": "default",
                  "backgroundColor": "default",
                  "textAlignment": "left"
                },
                "content": [
                  {
                    "type": "text",
                    "text": "Suicides transformed into thorny bushes fed on by Harpies.",
                    "styles": {}
                  }
                ],
                "children": []
              },
              {
                "id": "aab94354-009e-4c2a-bfae-3702ee3bc5d6",
                "type": "paragraph",
                "props": {
                  "textColor": "default",
                  "backgroundColor": "default",
                  "textAlignment": "left"
                },
                "content": [
                  {
                    "type": "text",
                    "text": "Includes Pier delle Vigne.",
                    "styles": {}
                  }
                ],
                "children": []
              },
              {
                "id": "13e093e1-64a5-4cef-a2db-e22833857754",
                "type": "bulletListItem",
                "props": {
                  "textColor": "default",
                  "backgroundColor": "default",
                  "textAlignment": "left"
                },
                "content": [
                  {
                    "type": "text",
                    "text": "Inner Ring",
                    "styles": {
                      "bold": true
                    }
                  }
                ],
                "children": [
                  {
                    "id": "e3908db4-9597-43de-be06-fe97439b456d",
                    "type": "paragraph",
                    "props": {
                      "textColor": "default",
                      "backgroundColor": "default",
                      "textAlignment": "left"
                    },
                    "content": [
                      {
                        "type": "text",
                        "text": "Violent against God (blasphemers) and nature (sodomites, usurers), punished on flaming sand with fiery rain.",
                        "styles": {}
                      }
                    ],
                    "children": []
                  },
                  {
                    "id": "e9150de2-80fa-480d-8547-739e0ae2d15b",
                    "type": "paragraph",
                    "props": {
                      "textColor": "default",
                      "backgroundColor": "default",
                      "textAlignment": "left"
                    },
                    "content": [
                      {
                        "type": "text",
                        "text": "Includes Brunetto Latini.",
                        "styles": {}
                      }
                    ],
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "892751d5-7d5d-43fb-a9b8-305cc474ab51",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Eighth Circle (Fraud) - ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Malebolge",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " (\"Evil Pockets\")",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "078ca9c9-912a-415b-960b-3d930c4323ef",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Reached by descending Geryon's cliff. Divided into ten Bolgie:",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "36f73d5b-600c-4e6a-8c05-158629ffc384",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 1",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Panderers and seducers whipped by demons.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "176beb44-2e39-4809-a3c7-c82934692491",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 2",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Flatterers steeped in human excrement.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "35bd6aa6-c5fa-416b-9dbf-a21c1be76646",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 3",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Simoniacs placed head-first in holes, feet set ablaze.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "1e5a133f-d992-4b0f-9d50-d90129317752",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 4",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Sorcerers and false prophets with heads twisted backwards.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "ffe9cdfc-8042-408c-ae59-8658b19a3508",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 5",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Barrators immersed in boiling pitch, guarded by Malebranche.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "a3deaea5-6d4a-4c64-8c61-9d114898ff65",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 6",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Hypocrites walk in gilded lead cloaks; Caiaphas crucified.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "0986e532-2ebb-45c7-a5e4-cfa02c9de515",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 7",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Thieves bitten by snakes and lizards, undergoing transformations (guarded by Cacus).",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "ca4a3ac1-8020-4cf5-8807-202f1b5f3e2b",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 8",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Fraudulent advisers concealed within flames.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "f679b83f-2f96-4eae-8df8-84a6eac59b7b",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 9",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Sowers of discord hacked by demons.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "e5805b3c-7ebc-4d91-9fd3-4c6f97b783f7",
    "type": "numberedListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Bolgia 10",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Falsifiers afflicted with diseases (alchemists, counterfeiters, perjurers, impersonators).",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "a31b3831-0e8a-421d-85dc-a92f8599d8f7",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Ninth Circle (Treachery) - ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Cocytus",
        "styles": {
          "italic": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "d67c6943-52cb-4871-8f77-705594e5b42a",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Frozen lake divided into four rounds:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "52bc78ce-fa9e-4ea1-bace-cd6d03f3b6db",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Round 1 (Caïna)",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Traitors to kindred. (e.g., Mordred)",
            "styles": {}
          }
        ],
        "children": [
          {
            "id": "b763b653-55cd-4b24-af5b-13b56e28d7dd",
            "type": "bulletListItem",
            "props": {
              "textColor": "default",
              "backgroundColor": "default",
              "textAlignment": "left"
            },
            "content": [
              {
                "type": "text",
                "text": "Round 2 (Antenora)",
                "styles": {
                  "bold": true
                }
              },
              {
                "type": "text",
                "text": ": Traitors to political entities. (e.g., Count Ugolino gnawing on Archbishop Ruggieri)",
                "styles": {}
              }
            ],
            "children": [
              {
                "id": "aab04515-91d3-4681-b362-c2dde42d9c21",
                "type": "bulletListItem",
                "props": {
                  "textColor": "default",
                  "backgroundColor": "default",
                  "textAlignment": "left"
                },
                "content": [
                  {
                    "type": "text",
                    "text": "Round 3 (Ptolomaea)",
                    "styles": {
                      "bold": true
                    }
                  },
                  {
                    "type": "text",
                    "text": ": Traitors to guests. (e.g., Fra Alberigo)",
                    "styles": {}
                  }
                ],
                "children": [
                  {
                    "id": "982e0764-ff16-420c-b59a-0aae20b24a77",
                    "type": "bulletListItem",
                    "props": {
                      "textColor": "default",
                      "backgroundColor": "default",
                      "textAlignment": "left"
                    },
                    "content": [
                      {
                        "type": "text",
                        "text": "Round 4 (Judecca)",
                        "styles": {
                          "bold": true
                        }
                      },
                      {
                        "type": "text",
                        "text": ": Traitors to lords and benefactors.",
                        "styles": {}
                      }
                    ],
                    "children": [
                      {
                        "id": "84ce3a6f-2077-4012-8a6d-eb27655bfa38",
                        "type": "paragraph",
                        "props": {
                          "textColor": "default",
                          "backgroundColor": "default",
                          "textAlignment": "left"
                        },
                        "content": [
                          {
                            "type": "text",
                            "text": "Satan resides here, frozen and chewing on Judas, Brutus, and Cassius.",
                            "styles": {}
                          }
                        ],
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "38cc64a2-cb7a-42ec-809d-ef2037e27af7",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 2
    },
    "content": [
      {
        "type": "text",
        "text": "Key Concepts",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "4275e9d6-4abd-4dea-9bbf-0ff73ebbe40a",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Sin and Punishment",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "bc1280a6-777b-45da-869f-bd638fafdb09",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Each circle of Hell corresponds to a specific sin, with symbolic punishments (contrapasso).",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "98f27610-4c0d-4fab-b428-3be9611de72d",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [],
    "children": []
  },
  {
    "id": "5116b926-a65b-40cb-b2f5-77b53f248afa",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Three Beasts",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "b0e43286-ad86-44e5-98c5-b5fb04c8ec91",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Represent three types of sin encountered by Dante:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "537218ad-32ea-412e-b8c5-6edbc89e3334",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Leopard: Self-indulgence",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "ddc4735c-d5c1-4c2b-9123-ccb3c3fe1c66",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Lion: Violence",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "f95668b4-4424-4d52-bf5a-735ea46cdfcc",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "She-wolf: Malice",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "5b0272fa-4e7e-4ddd-b84d-6aff6ab0e01f",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Virtue and Vice",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "9c3339d8-03a6-402a-8309-430002c0bde9",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The lower circles follow the Aristotelian conception of virtue and vice.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "4052b277-0d17-4a4b-83a1-f5718cb4c310",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Free Will",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "e4319606-84e4-46e2-aa3e-981d1c72ad99",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Relevant in the context of anger in ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Purgatorio",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " — no use being angry at those without choice.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "7b66ca08-fb5f-493f-9fc2-c3d3dc4b8510",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Escape from Hell",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "c1c441f4-3326-4273-befc-3acd2057c04b",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Dante and Virgil escape Hell by climbing down Satan's fur, passing through Earth's center, and emerging in the Southern Hemisphere.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "a8a3228a-6fe7-4ecc-9980-168d1a488bc9",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 1
    },
    "content": [
      {
        "type": "text",
        "text": "Study Guide: ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Purgatorio",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " & ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Paradiso",
        "styles": {
          "italic": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "663af9ad-3701-48ea-92b9-2b0d168cead6",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 2
    },
    "content": [
      {
        "type": "text",
        "text": "Introduction: ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "The Divine Comedy",
        "styles": {
          "italic": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "b2d83bd8-bc1f-4546-885c-631bf4d913cd",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The Divine Comedy",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " by Dante Alighieri is an epic poem, considered the greatest work of literature composed in Italian.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "f98f08e7-9a57-4333-a364-66a0b7336105",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "It presents a ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "philosophical Christian vision",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " of mankind’s eternal fate through an ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "allegorical journey",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " in the afterlife.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "28bb31c7-5a08-4736-b720-afb096b58f05",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Structured into three parts:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "e9b604e4-9d66-4af2-9f8c-a6638b49fc88",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Inferno",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": " (Hell)",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "b6a93b3a-63e0-49b6-afcb-f5b7a96d3c41",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Purgatorio",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": " (Purgatory)",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "a8802501-6ab9-41a4-affa-5d03631bbf3b",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Paradiso",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": " (Heaven)",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "bd2a8546-c1f8-4e95-9c3d-4d6e9a8ec387",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Each realm follows a pattern of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "nine stages",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "e4e2c9e0-37d0-4fb4-beed-459790493392",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The narrative spans from the night before Good Friday to the Wednesday after Easter, in the year ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "1300",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "c94f458e-fe6d-403b-afdc-2ac2465ceb7c",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "It symbolizes the ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "soul’s journey toward God",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ":",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "dea4c69f-ed95-41ed-a72a-4899145889e3",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Inferno",
            "styles": {
              "italic": true
            }
          },
          {
            "type": "text",
            "text": " → Recognition and rejection of sin",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "e79d1873-27ac-4ae9-b46e-af1c3bb26127",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Purgatorio",
            "styles": {
              "italic": true
            }
          },
          {
            "type": "text",
            "text": " → The penitent Christian life",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "f27ac6f6-fac4-4c1e-b237-96e8526c1775",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Paradiso",
            "styles": {
              "italic": true
            }
          },
          {
            "type": "text",
            "text": " → Spiritual ascent to God through divine love",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "f1a593d2-9d7c-4711-bf8f-8cf64e1df17a",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "A foundational work of the ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Western literary canon",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "17019e7c-5113-4021-9d5e-80ee1712d915",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 2
    },
    "content": [
      {
        "type": "text",
        "text": "Purgatorio",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " (Purgatory)",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "7ab2e728-6464-4716-9168-3d780df076b3",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Part 2 of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "The Divine Comedy",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ", following ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Inferno",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "dde8ee06-b8a9-44e0-bfe1-8d647acdcf6a",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Allegory for ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "the penitent Christian life",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "b3154b49-5c72-4879-b596-04e558d0389d",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Describes the climb up the ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Mountain of Purgatory",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ", having emerged from Hell.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "78453760-30ec-411f-9c6c-d75d03548e8c",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Structure of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Purgatorio",
        "styles": {
          "italic": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "94d932ff-c6d8-414a-a3ce-0e01ac7bd306",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "1. Ante-Purgatory (Lower Slopes)",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "abf7d903-079a-4f5b-80b3-5ee5c3ac974c",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Souls",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Those who delayed repentance or were deficient in Christian life.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "1480b21c-8109-43b6-80a9-025f1d78a302",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Includes:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "c765c91f-968b-4046-b018-80f986a5230d",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "The ",
            "styles": {}
          },
          {
            "type": "text",
            "text": "excommunicated",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": " (detained for a time)",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "ee74d9b5-bfc2-4de0-b042-8cf55420135b",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "The ",
            "styles": {}
          },
          {
            "type": "text",
            "text": "late-repentant",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": " (those who repented only at death)",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "533e1ca9-13f4-4172-9e18-bcb7d4ffcf37",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Key Figures:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "bfcb6b95-fa5e-4d22-b8c6-1571bcb1f534",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Cato",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Guardian of the mountain.",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "f9a84f7f-66b9-41cb-87aa-e220fadc16bc",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Sordello",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Explains the \"Rule of the Mountain\" (no progress after sunset without Divine Grace).",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "6006fa03-b750-4f87-9be1-135eb67f83db",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Encounters with deceased monarchs hindered by earthly duties.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "074804aa-82f6-4b7e-9433-36304f8f0e0a",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "2. The Gate of Purgatory",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "4a257bed-9376-4a0b-891a-d89a52bbc81f",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Guarded by an ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "angel",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "54d19cff-aca1-4fc4-9884-f1deca67e379",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Dante receives seven ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "P’s",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " (peccatum, meaning \"sin\") marked on his forehead.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "82d2b219-4f8e-4108-aac4-f86a0df28666",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Two keys open the gate:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "b5bdf4ff-f6b9-4554-b8de-c8ea3d116ac2",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Silver Key",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Remorse",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "20150109-0273-490f-bd22-e83c406bc718",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Gold Key",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Reconciliation",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "efda9f5b-43df-4cac-9429-df05f6c1a5a4",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "3. The Seven Terraces",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "6a9c0736-4a9d-435e-9e06-07c318acdc75",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Each terrace corresponds to purging one of the ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Seven Deadly Sins",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ":",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "62fcf3d7-56fe-40ef-a0cf-8bb16fc7dd69",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Terraces 1–3: Perverted Love (harm to others)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": [
      {
        "id": "40fec5c4-6759-499a-a2dc-36788aa39d5a",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "First Terrace – Pride",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Souls bent under stones. Sculptures show humility.",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "ba726fb8-13a1-41cd-9981-8a2186ee8493",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Second Terrace – Envy",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Souls hear voices praising generosity.",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "df445f5a-73cb-4d95-b659-21e2014c927f",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Third Terrace – Wrath",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Souls wander in smoke; visions of meekness.",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "f936ada0-0d05-4678-93e4-493be498d42c",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Terrace 4: Deficient Love",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": [
      {
        "id": "1c96b14a-919e-465a-b920-c95c41f5a411",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Fourth Terrace – Sloth",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Souls run constantly; beatitude: ",
            "styles": {}
          },
          {
            "type": "text",
            "text": "Beati qui lugent",
            "styles": {
              "italic": true
            }
          },
          {
            "type": "text",
            "text": " (\"Blessed are those who mourn\").",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "bd9ec5ae-0a17-4962-9765-bc603caad0d6",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Terraces 5–7: Disordered Love (excessive attachment to good things)",
        "styles": {
          "bold": true
        }
      }
    ],
    "children": [
      {
        "id": "54f2d291-d581-4c94-a967-a69366d680a7",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Fifth Terrace – Avarice/Prodigality",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Souls lie face-down, praying ",
            "styles": {}
          },
          {
            "type": "text",
            "text": "Adhaesit pavimento anima mea",
            "styles": {
              "italic": true
            }
          },
          {
            "type": "text",
            "text": " (\"My soul cleaveth unto the dust\").",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "1d8acff1-845c-4eda-9990-8ff49092d64f",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Sixth Terrace – Gluttony",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Souls suffer hunger and thirst; prayer: ",
            "styles": {}
          },
          {
            "type": "text",
            "text": "Labia mea Domine",
            "styles": {
              "italic": true
            }
          },
          {
            "type": "text",
            "text": " (\"O Lord, open my lips\").",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "98761552-5cea-4242-9c77-5e006f64c982",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Seventh Terrace – Lust",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Souls pass through flames, singing ",
            "styles": {}
          },
          {
            "type": "text",
            "text": "Summae Deus Clementiae",
            "styles": {
              "italic": true
            }
          },
          {
            "type": "text",
            "text": " (\"God of Supreme Clemency\").",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "1d7447b6-7828-455b-96ac-e7e005a2056c",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "4. The Earthly Paradise (Garden of Eden)",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "bc89b987-ceab-42d9-a820-78dfcf2a46e1",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Located at the ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "summit",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " of Mount Purgatory.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "e5ce8b29-a71e-41c5-b5fc-d52c16461e4c",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Represents ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "original innocence",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " before the Fall.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "9aa6ed2a-3339-49ac-953e-d6f645f932b3",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Key Figures:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "88feafa7-07d8-485a-9ef5-5fd79eba5bac",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Matilda",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Prepares Dante for Beatrice.",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "e0913502-8d9b-4fc2-8c34-fd7aada2a8aa",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Beatrice",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ": Replaces Virgil; symbolizes divine wisdom and love.",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "afb3d2b8-83e3-4b68-be7e-86f1dffb7a1b",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Events:",
        "styles": {}
      }
    ],
    "children": [
      {
        "id": "641ff86d-71f3-49ab-8eb9-04c776e4254b",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Dante crosses the ",
            "styles": {}
          },
          {
            "type": "text",
            "text": "River Lethe",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": " (forgetting sins).",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "ad30c4bb-cf36-4986-b67e-f28487622ef2",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Sees allegories of Church history.",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "531bdb97-db6d-4d93-b16c-fda5a7fa8d8a",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Drinks from the ",
            "styles": {}
          },
          {
            "type": "text",
            "text": "River Eunoë",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": " (restoring good memories).",
            "styles": {}
          }
        ],
        "children": []
      },
      {
        "id": "d2cda4cb-766c-4f0d-9722-e12a33f4c537",
        "type": "bulletListItem",
        "props": {
          "textColor": "default",
          "backgroundColor": "default",
          "textAlignment": "left"
        },
        "content": [
          {
            "type": "text",
            "text": "Virgil departs",
            "styles": {
              "bold": true
            }
          },
          {
            "type": "text",
            "text": ", as human reason alone cannot guide to Heaven.",
            "styles": {}
          }
        ],
        "children": []
      }
    ]
  },
  {
    "id": "d9b0b31a-ce9c-40cd-a693-f124e0f8dc5d",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Purgatorio",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " ends on the word \"",
        "styles": {}
      },
      {
        "type": "text",
        "text": "stars",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".\"",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "f37181c8-5c86-46bf-8410-851da74ad9ea",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 2
    },
    "content": [
      {
        "type": "text",
        "text": "Paradiso",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " (Heaven)",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "3de4648e-8a75-4e30-a6a7-c8938d7c9cd7",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Final part of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "The Divine Comedy",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "275e38be-1675-44fd-9ed5-01b32fe1b30c",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Describes Dante’s ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "spiritual ascent",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " through Heaven with Beatrice as guide.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "d7f98203-1354-439c-b52a-05a587125100",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Focuses on ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "divine love, enlightenment, and union with God",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "0bdd24cf-17d2-4254-9b64-1ee75341af3d",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Written in vernacular Italian to make theology accessible.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "538998e3-a89f-475b-bf4a-2a716406f6e9",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Criticizes Italian politics, advocating ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "moral integrity and justice",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "d21e13a5-fbdb-4ebb-b62c-ff1246e32e5d",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Heaven is structured into ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "nine celestial spheres",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ", culminating in the ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Empyrean",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "6a1a91e1-778e-46c2-a324-7ba33678fc59",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Themes of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Paradiso",
        "styles": {
          "italic": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "34635f22-ebdc-409b-aac5-8f1c11d2c0f7",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Divine Love and Knowledge",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Moving forces of Heaven.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "aa0afbaa-c981-41fa-8432-73911b19d36c",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Unity and Harmony",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Souls align with God's will.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "1cce888b-1133-4c48-81c2-8df7ace660ac",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The Beatific Vision",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Direct encounter with God.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "62ff3a69-1e25-4c04-a344-e7d626140246",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Structure of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Paradiso",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ": The Nine Spheres",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "491df20a-0da1-4b68-b108-40bc4b387f36",
    "type": "table",
    "props": {
      "textColor": "default"
    },
    "content": {
      "type": "tableContent",
      "columnWidths": [
        null,
        null
      ],
      "headerRows": 1,
      "rows": [
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Sphere",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Souls Represented",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "1. The Moon",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Those who broke vows (virtue of faith)",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "2. Mercury",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Just but ambitious individuals",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "3. Venus",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Souls moved by love and compassion",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "4. The Sun",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Theologians and philosophers (intellectuals)",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "5. Mars",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Warriors of faith",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "6. Jupiter",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Just rulers",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "7. Saturn",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Contemplatives and monks",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "8. The Fixed Stars",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Saints exemplifying faith, hope, and love",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        },
        {
          "cells": [
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "9. Primum Mobile",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            },
            {
              "type": "tableCell",
              "content": [
                {
                  "type": "text",
                  "text": "Moved by God, source of motion for others",
                  "styles": {}
                }
              ],
              "props": {
                "colspan": 1,
                "rowspan": 1,
                "backgroundColor": "default",
                "textColor": "default",
                "textAlignment": "left"
              }
            }
          ]
        }
      ]
    },
    "children": []
  },
  {
    "id": "7a67f396-dfc8-4603-9c89-b643cb2bb90c",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "The Empyrean – Final Sphere",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "0b81985b-4485-42a5-80b2-4b84e969e0b0",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Realm of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "pure light",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " and ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "eternal peace",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "be1481c6-bf28-4048-ab74-9251b601ae66",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Home of ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "God",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " and ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "angels",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "379c01a4-550e-4b5a-a18a-2cd9a07446a4",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Vision of the ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Celestial Rose",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": perfect harmony of blessed souls.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "bffa9e47-e836-4593-b35c-88e114de102a",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Dante’s Beatific Vision",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Unity with God beyond the limits of language.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "404406a0-1df5-4d8d-a486-65ecd1b0703d",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Key Figures in ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Paradiso",
        "styles": {
          "italic": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "037e6e93-2fff-44ce-8a9b-3943f4b301d7",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Beatrice",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Guide and symbol of divine love.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "7ff2c47e-26a5-4885-abd8-49074a48f348",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "St. Bernard",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Prepares Dante for the Beatific Vision.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "663db473-49f7-413a-be15-5c674d8ad9f8",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Blessed Souls",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Historical and Biblical figures exemplifying virtue.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "98a66a72-f763-4cd8-8a43-f492e64bd66a",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 3
    },
    "content": [
      {
        "type": "text",
        "text": "Symbolism in ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Paradiso",
        "styles": {
          "italic": true
        }
      }
    ],
    "children": []
  },
  {
    "id": "3fac2d87-cb8c-4688-b7fc-b6557f7cd8ab",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Light",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ": Represents divine truth.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "b027d8b5-8023-4c72-8687-0f183d612837",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "The ascent: increasing ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "brightness",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": " = increasing closeness to God.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "523757cd-5d4f-4aa0-9b1c-1d23aa22e022",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "In the Empyrean: total immersion in ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "divine light",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ".",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "2637c4d8-17b6-4487-8698-6265bdf7e199",
    "type": "heading",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left",
      "level": 2
    },
    "content": [
      {
        "type": "text",
        "text": "Conclusion",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "adcfa0f5-ae2a-4109-adf3-66f896c3af80",
    "type": "bulletListItem",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [
      {
        "type": "text",
        "text": "Like ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Inferno",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " and ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Purgatorio",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": ", ",
        "styles": {}
      },
      {
        "type": "text",
        "text": "Paradiso",
        "styles": {
          "italic": true
        }
      },
      {
        "type": "text",
        "text": " ends with the word \"",
        "styles": {}
      },
      {
        "type": "text",
        "text": "stars",
        "styles": {
          "bold": true
        }
      },
      {
        "type": "text",
        "text": ",\" symbolizing hope, transcendence, and the divine.",
        "styles": {}
      }
    ],
    "children": []
  },
  {
    "id": "ee096305-02bc-4cac-a01a-f6e55922a0f7",
    "type": "paragraph",
    "props": {
      "textColor": "default",
      "backgroundColor": "default",
      "textAlignment": "left"
    },
    "content": [],
    "children": []
  }
]




// export const mockApiCallNote = (id: string) : GetUserNoteResponse | undefined => {
//   console.log("logging from mock api call");
//   const res = staticUserNotes.find((f) => f.note.id === id);
//   return res
// }

export const sampleSocketGeneratedResponse : SummarizerMessage = {
  id:"1a96c95d-cadc-4d96-b955-4d3a40778b4a",
  name: "Toxicology Notes",
  response: {
    keywords: [
      'project ideas',
      'viability',
      'dashboard customizable',
      'environmental',
      'preliminary market',
      'learning rank',
      'deadlines user',
      'usage travel',
      'domain',
      'monitor reduce'
    ],
    summary: 'The text outlines several potential project ideas for exploration. These include an AI-powered task prioritization system, an interactive data visualization dashboard, a community knowledge-sharing platform, a personalized learning recommendation engine, and an environmental impact tracking tool. Market viability research is needed for each idea before the next meeting.',
    topics: [
      'Project ideas for exploration:',
      'AI-powered task prioritization system',
      'Interactive data visualization dashboard',
      'Community knowledge-sharing platform',
      'Personalized learning recommendation engine',
      'Environmental impact tracking tool',
      'Market viability research for each idea'
    ]
  },
  dateTime: '2025-05-04T13:44:04.0261181Z',
  milleSeconds: 6707
}

// export const mockScores : AssignNoteFolderResponse = {
//   "folder": [
//     {
//       "folderId": "284d7f45-5fb5-4564-b68b-b7fe8fe14952",
//       "folderName": "Computer Science Notes",
//       "score": 0.651205587387085
//     },
//     {
//       "folderId": "276959e3-0aed-4980-bfc2-ff571361e92c",
//       "folderName": "Medical Technology Notes",
//       "score": 0.6366117417812348
//     }
//   ]
// }

export const mockChatResponses : PromptResponse[]  =  [
  {
    "threadId": "thread_Y3v4gLqBptu5R8BobemwmtKF",
    "responseMessage": "Dante's guide is the Roman poet Virgil, highlighting the themes of recognition and rejection of sin.",
    "noteCitations": [
      {
        "noteId": "eb01fe2c-a30a-4f98-a33d-830acea48501",
        "snippetId": "40ce53e2-b482-40f7-b1d4-a3837fe5c32d",
        "text": "guide virgil roman poet theme recognition rejection of sin"
      }
    ],
    "folderCitations": []
  },
  {
    "threadId": "thread_Y3v4gLqBptu5R8BobemwmtKF",
    "responseMessage": "The note provides a concise overview of Dante Alighieri and his epic poem, \"The Divine Comedy.\" It describes Dante's major works, including \"Vita Nuova\" and \"De Monarchia,\" and outlines the structure and key themes of \"The Divine Comedy,\" emphasizing its three parts: Inferno, Purgatorio, and Paradiso.",
    "noteCitations": [
      {
        "noteId": "eb01fe2c-a30a-4f98-a33d-830acea48501",
        "snippetId": "6c19833e-8920-45c2-833f-26574ddf91df",
        "text": "dante alighieri the divine comedy"
      }
    ],
    "folderCitations": []
  },
  {
    "threadId": "thread_Y3v4gLqBptu5R8BobemwmtKF",
    "responseMessage": "Dante's girl was Beatrice Portinari, to whom he dedicated his poetic work \"Vita Nuova.\"",
    "noteCitations": [
      {
        "noteId": "eb01fe2c-a30a-4f98-a33d-830acea48501",
        "snippetId": "40c413ed-79f1-4454-918a-4758c1523c11",
        "text": "vita nuova poetic tribute to beatrice portinari"
      }
    ],
    "folderCitations": []
  }
]