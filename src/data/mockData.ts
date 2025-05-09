import { SummarizerMessage } from "@/hooks/sockets";
import { AssignNoteFolderResponse } from "@/service/notes/auto-assign-note";
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

const staticUserNotes = [
  {
    note: {
      ...mockedCreatedNote
    }
  },
  {
    "note": {
      "id": "df8aace4-c495-4219-9039-db6486cbdeea",
      "title": "Project Brainstorm Ideas",
      "content": "[\n  {\n    \"id\": \"48903be0-e993-4eb5-be1a-502fb825b6d0\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 1\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"📌 Project Ideas for Exploration\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"21e1b741-c334-43c2-b094-0ee46cc26c06\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Below are several promising concepts we could pursue. Each will require \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"market viability research\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" before our next meeting:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"17f95964-2b70-459c-af34-cdaf04ccbe06\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"1. 🤖 AI-Powered Task Prioritization System\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"981a5c90-0b25-4662-815a-7a71ccd58dd8\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A smart system that uses machine learning to rank and schedule tasks based on urgency, deadlines, and user behavior.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"59176d66-cc3b-4348-94c9-961656a25d02\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"2. 📊 Interactive Data Visualization Dashboard\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"c30ec3f8-c7d8-4b99-9406-da218aeefba9\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A customizable dashboard for real-time data insights with interactive charts, filters, and reporting capabilities.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"430d12e4-a6d5-4711-9f09-1751b20b2fde\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"3. 🌐 Community Knowledge Sharing Platform\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"ebcb817e-b92f-4b9c-90e1-909f31ca72dd\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A collaborative space for users to contribute, discuss, and curate domain-specific knowledge (e.g., for developers, educators, or niche communities).\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"cdb8c925-05b4-4758-b014-50320012a8ae\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"4. 🎯 Personalized Learning Recommendation Engine\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"5a32086a-ab0c-4940-894c-fa1cfffc44ae\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"An adaptive engine that recommends learning materials based on user goals, performance, and preferences — ideal for edtech applications.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"bdff502e-40a3-4314-bddb-47cbb95459ce\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"5. 🌱 Environmental Impact Tracking Tool\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"ed4a0bc8-38db-4e06-a579-91be9e950482\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A tool for individuals or organizations to monitor and reduce their carbon footprint by tracking energy usage, travel, and resource consumption.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"ffa7f748-2275-4132-9aa5-f09881382688\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"✅ \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Action Item\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Conduct preliminary market research for each concept to assess potential demand, target users, competition, and monetization opportunities.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"347a023d-2cf0-4125-b242-4fd566f50ff0\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "The text outlines key project ideas to explore, including an AI-powered task prioritization system, interactive data visualization dashboard, community knowledge sharing platform, personalized learning recommendation engine, and environmental impact tracking tool. It emphasizes the need to research the market viability of each concept before the next meeting.",
      "createdAt": "2025-04-20T02:55:59.969059Z",
      "updatedAt": "2025-05-03T07:33:59.304622Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "project ideas",
        "environmental impact",
        "need research",
        "prioritization",
        "visualization dashboard",
        "sharing platform",
        "engine",
        "tracking",
        "market",
        "key"
      ],
      "topics": [
        "Project ideas for exploration:",
        "AI-powered task prioritization system",
        "Interactive data visualization dashboard",
        "Community knowledge sharing platform",
        "Personalized learning recommendation engine",
        "Environmental impact tracking tool",
        "Focus areas:",
        "Market research for each concept",
        "Prioritization of ideas for the next meeting",
        "Key topics:",
        "Project ideas",
        "Environmental impact",
        "Need for research",
        "Prioritization",
        "Visualization dashboard",
        "Sharing platform",
        "Engine",
        "Tracking",
        "Market viability",
        "Key concepts"
      ]
    }
  },
  {
    "note": {
      "id": "e4d28684-1db3-463e-aa72-0001f7ef61a3",
      "title": "Introduction to Artificial Intelligence",
      "content": "[\n  {\n    \"id\": \"39dac989-109a-4e0e-acda-d6100a2e9f2f\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🤖 Artificial Intelligence (AI)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"e2723259-7595-4d51-b788-b801b0b9cf34\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Artificial Intelligence (AI)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" is a branch of computer science focused on building machines that can perform tasks typically requiring \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"human intelligence\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \". These tasks include:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"52432b40-6aed-41f1-b59f-945e0b6a2943\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🧠 Problem-solving\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"3bcbd364-8668-4054-9ac1-2fe227de809a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🔍 Reasoning\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"253bc499-acc2-4c9a-b995-dd4c6b4f2d1f\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"📚 Learning\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"0896354c-936c-44a5-bd17-b0fec8bd2c44\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🗣️ Speech recognition\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"e4d6e7b0-a5fe-43bb-80c6-d59c743ad6e7\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🧾 Decision-making\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"7a1be2f7-1134-4bb0-aac5-6858dc2fb5b9\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧭 Categories of AI\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"b0212641-2e8a-478e-9855-c433686302fe\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"AI systems are generally classified into two broad types:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"ae78636d-ab1e-4c10-bb56-f020c95b986a\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🔹 Narrow AI (Weak AI)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"f74504c5-82cc-4927-8c5b-5c9829e0c51a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Designed to \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"perform a specific task\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"feabd972-cdce-4b56-85fc-b5d19f54b9d8\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Examples:\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": [\n          {\n            \"id\": \"4e03f44b-cf87-4282-9677-c6265b92b542\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Virtual assistants (e.g., Siri, Alexa)\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          },\n          {\n            \"id\": \"80068a94-e57a-4564-9073-7979537c7026\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Facial recognition\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          },\n          {\n            \"id\": \"083a2479-e2b4-46b8-96c3-942079195f8d\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Spam filters\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"3be64dad-6d34-4191-8f7d-17c817f14ca2\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🔸 General AI (Strong AI)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"c2691e85-9576-4b0f-8238-45d1f9b089df\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Hypothetical systems with \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"general cognitive abilities\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"632940a3-a32c-4a60-880b-5ebe86708c4d\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Can perform \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"any intellectual task\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" a human can\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"6da90772-abad-4603-8b44-86fc4bc67425\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Still in the realm of research and development\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"ea689e1c-a6b6-419a-adee-da4e8894b68e\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧠 Machine Learning & Deep Learning\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"68bee9c9-1da2-41cd-ac0d-13261c17bff6\",\n        \"type\": \"paragraph\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"📊 Machine Learning (ML)\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"e7a23c02-4f90-47b5-9f23-0939e391124a\",\n        \"type\": \"paragraph\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"A subfield of AI that uses \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"algorithms trained on data\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" to make predictions or decisions.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"0e47c276-27e4-4776-880c-ac4bf2c89045\",\n        \"type\": \"paragraph\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🌐 Deep Learning\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"1d9565cf-8dbe-4744-bae4-614f2a77ab1d\",\n        \"type\": \"paragraph\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"A subset of ML that uses \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"artificial neural networks\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" to model complex patterns:\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": [\n          {\n            \"id\": \"f4fb550f-5058-445a-aacd-883ac7847e19\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Image and speech recognition\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          },\n          {\n            \"id\": \"d4b442bf-3368-431c-b126-f3d8c7fb549f\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Natural language understanding\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          },\n          {\n            \"id\": \"6d34840c-849c-4206-a888-ccfd2e2e4fde\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Game-playing AIs like AlphaGo\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"9c3ed4e9-fbea-4aec-bff6-692c85713798\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🚀 Applications of AI\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"abd51574-92a5-43ec-8402-b2e560bbc8ca\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"AI is revolutionizing industries by enhancing capabilities and efficiency:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"8af783d6-9862-49e2-a717-6d0a8590821d\",\n    \"type\": \"table\",\n    \"props\": {\n      \"textColor\": \"default\"\n    },\n    \"content\": {\n      \"type\": \"tableContent\",\n      \"columnWidths\": [\n        null,\n        null\n      ],\n      \"headerRows\": 1,\n      \"rows\": [\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Industry\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Application\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"🚗 Automotive\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Autonomous vehicles, driver assistance\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"🏥 Healthcare\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Disease detection, personalized treatment\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"💰 Finance\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Fraud detection, algorithmic trading\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"💬 NLP & Comms\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Chatbots, translation, sentiment analysis\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    \"children\": []\n  },\n  {\n    \"id\": \"bca73c39-9e7d-40a8-a518-2d0152691c9d\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"⚖️ Ethical Considerations\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"64e39550-921c-4e7a-a446-81c2ecae14b5\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"As AI adoption grows, it’s crucial to address challenges such as:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"fbf80625-9879-452c-9af2-296742e4e9d5\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🔐 Privacy and data protection\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"52a3ebbb-7f2d-4fef-9c5f-a4ed55f1d88c\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🤖 Algorithmic bias and fairness\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"afef8fdf-61fa-410c-b48e-815ee110ed3c\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"👥 Job displacement and workforce impact\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"5d590fba-0f1c-4dd0-bd6c-da466eca4f8b\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧭 Accountability and transparency\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"3fdd0191-19fc-4ec8-8507-67c08a109fb9\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"📈 The Future of AI\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"0519487a-3075-4c89-9201-17b08cee41c4\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"AI is \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"transforming how we work, live, and interact\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" with technology. As it evolves:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"018acafd-0c39-45e9-a029-9ee20b55ab83\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"New opportunities for \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"innovation and automation\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" will arise\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"fbe1bdd8-cbba-49a7-b6ed-3513436e6add\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Ethical frameworks and regulations will be critical\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"2dfad485-fd35-43e3-ae17-38eaa0bc6738\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Continued \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"interdisciplinary research\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" will shape its trajectory\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"54f21907-f49e-4c79-aae1-27b646e7aafd\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"In summary\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \", AI is not just a technological shift—it's a societal one, reshaping the future across every domain.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"eb74b31e-be68-4f21-8c5a-01668283558c\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "Artificial intelligence (AI) is a field of computer science that focuses on developing machines capable of performing tasks that usually require human intelligence. There are two main categories of AI: narrow AI, which is designed for specific tasks like voice assistants or facial recognition, and general AI, which is a more advanced form designed for broader applications.",
      "createdAt": "2025-04-30T02:41:01.252367Z",
      "updatedAt": "2025-05-03T07:26:03.659655Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "ai refers",
        "deep learning",
        "categories narrow",
        "like voice",
        "branch computer",
        "datasets enable",
        "potential ethical",
        "vehicles",
        "financial forecasting",
        "continues progress"
      ],
      "topics": [
        "Deep Learning in AI",
        "Branches of Computer Science",
        "Datasets in AI",
        "Potential Ethical Issues in AI",
        "AI in Vehicles",
        "AI in Financial Forecasting",
        "Progress in AI Research"
      ]
    }
  },
  {
    "note": {
      "id": "e4f91f54-7aaa-410c-9d41-e4ea622d0917",
      "title": "Dynamic Programming Techniques",
      "content": "[\n  {\n    \"id\": \"6936f12a-47e8-4296-b7ce-e842938c48f9\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 1\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧠 Dynamic Programming Essentials\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"08f5a8b0-c7ab-46ca-a02b-07e807e2c1ff\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems and storing their results to avoid redundant work.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"15ee4a57-55e4-4d53-876e-a3a3f29aea64\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"1. 🔑 Key Principles\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"5796dfe3-6050-483d-bce4-281761a5a850\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Overlapping Subproblems\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Many problems (e.g., Fibonacci numbers, pathfinding) can be broken down into subproblems that are reused multiple times.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"a1cd08fb-57cd-4cfe-876e-f355422cf9ef\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Optimal Substructure\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": A problem exhibits this when its optimal solution can be formed from optimal solutions of its subproblems.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"6cce494c-fab4-41ec-a9f8-50ca6e204c1b\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Memoization (Top-Down)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Cache the results of function calls to avoid recalculating the same result.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"7bb28989-b121-413e-bfff-fd4590534b7f\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Tabulation (Bottom-Up)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Build solutions iteratively from base cases upward using a table (usually an array or matrix).\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"e7143e21-24bc-4401-b74c-e6da9430800c\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"2. 📚 Approaches to DP\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"125c677c-df86-4ba3-9042-6925a8865a04\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧵 Top-Down (Recursive with Memoization)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"ffb659eb-9b00-4a73-8855-3f7ae5491178\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Start from the main problem and break it down recursively.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"f5a4f19f-66a7-4229-a23c-7c77400915a7\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Use a dictionary or array to store results of subproblems.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"bf08f8ee-a652-4f71-8016-36e472e77369\",\n    \"type\": \"codeBlock\",\n    \"props\": {\n      \"language\": \"csharp\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Dictionary<int, int> memo = new();\\nint Fib(int n) {\\n    if (n <= 1) return n;\\n    if (memo.ContainsKey(n)) return memo[n];\\n    return memo[n] = Fib(n - 1) + Fib(n - 2);\\n}\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"0517fe09-6377-4802-aaaa-f30ea0faea68\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧱 Bottom-Up (Iterative Tabulation)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"0ea67fea-15f8-4967-8096-73a9ee75ab5a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Define base cases and solve incrementally.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"bd7cc457-a83f-4d54-9ced-f37808ee392e\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Typically more memory-efficient and faster than top-down.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"94b43a54-4cc8-44ea-bc41-eed3a1d7bbfa\",\n    \"type\": \"codeBlock\",\n    \"props\": {\n      \"language\": \"csharp\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"int Fib(int n) {\\n    if (n <= 1) return n;\\n    int[] dp = new int[n + 1];\\n    dp[0] = 0; dp[1] = 1;\\n    for (int i = 2; i <= n; i++) {\\n        dp[i] = dp[i - 1] + dp[i - 2];\\n    }\\n    return dp[n];\\n}\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"fdb7d7f9-5f86-4937-9a33-0a8b9dd55786\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"3. 🧩 Classic Dynamic Programming Problems\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"fad38433-26ac-4b8d-ac46-90a6b759a7cd\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Fibonacci Sequence\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Simple DP with 1 state variable.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"60499ed9-be53-4c94-84d6-5fd94312ae21\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"0/1 Knapsack\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Choose items with weight/value constraints.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"2de5e7dc-7983-48e9-a51f-437f09f1f101\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Longest Common Subsequence (LCS)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Match characters between two sequences.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"c4faea57-a072-4e63-b543-ca8c6525a537\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Matrix Chain Multiplication\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Parenthesize matrix multiplication to minimize operations.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"4d23ceb4-5c70-45f9-ab2d-c7bb6edd1479\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Shortest Path (e.g., Floyd-Warshall)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Compute all-pairs shortest paths using dynamic programming.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"c6ba87ef-53b9-4cbb-9d03-bbe56e5d2eb8\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"4. 🛠 Implementation Tips\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"1db5b216-f37a-49ec-99bf-881c5d251cf0\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Identify State Variables\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Choose variables that uniquely define a subproblem (e.g., current index, remaining capacity).\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"658d4ac7-323d-4f7b-a73e-6b4cde580010\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Define the Recurrence Relation\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Express the solution in terms of smaller subproblems. Example for LCS: \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"dp[i][j] = dp[i-1][j-1] + 1 if str1[i] == str2[j] else max(dp[i-1][j], dp[i][j-1])\",\n        \"styles\": {\n          \"code\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"8639c190-4249-4b39-a832-a4fca26390be\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Base Cases Matter\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Always define what happens when your inputs hit their minimum.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"b0036663-ea4c-4611-a086-b7b135954d78\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Optimize Space\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \": Many problems can reduce 2D arrays to 1D or even constant space using rolling arrays or variables.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"b5d950a0-1be5-49aa-aed3-dcad5d779ded\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"5. ⏱ Time and Space Complexity\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"175b549b-2b0d-4b61-a671-41444d766d88\",\n    \"type\": \"table\",\n    \"props\": {\n      \"textColor\": \"default\"\n    },\n    \"content\": {\n      \"type\": \"tableContent\",\n      \"columnWidths\": [\n        null,\n        null,\n        null\n      ],\n      \"headerRows\": 1,\n      \"rows\": [\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Problem Type\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Time Complexity\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Space Complexity\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Fibonacci (Top-Down)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"0/1 Knapsack\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n × W)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n × W) or O(W)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Longest Common Subseq.\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n × m)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n × m) or O(m)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Matrix Chain Mult.\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n³)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n²)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Floyd-Warshall (Graph)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n³)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n²)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    \"children\": []\n  },\n  {\n    \"id\": \"8deefae7-1e20-4ad8-8e62-ee033bb0757f\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Most 2D DP problems have \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"O(n × m)\",\n        \"styles\": {\n          \"code\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" time and space complexity.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"298d9840-df1f-4c20-8b8b-97dca08eddde\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Use \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"space optimization\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" where feasible to reduce memory footprint.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"747320bf-e401-437f-9732-9f4c8b71e521\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🚦 When to Use DP?\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"96e0c275-f0c6-42a5-8d82-8e31dd4148e6\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Use dynamic programming when:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"384156ee-5865-430b-9747-edca2920e4b7\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"The problem has \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"overlapping subproblems\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \".\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"4781063e-64ad-4a7e-bc87-bd78674f37c0\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"You can define a \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"recursive formula\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \".\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"5522cc59-f4cb-4910-a6dd-c68d12d23d99\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"brute force solution\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" is too slow.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"9dc4e4e9-95e7-439e-9258-76eba6f74396\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"If your recursive solution is slow and recalculates the same values, consider applying DP.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"526989bb-8eff-4386-a4cb-f29bb8e62d78\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "The text discusses dynamic programming techniques, including key principles such as breaking down problems into overlapping subproblems and storing solutions with memoization. There are two approaches to dynamic programming: top-down with memoization and bottom-up iterative building. It mentions classic problems that can be solved using dynamic programming, such as the Fibonacci sequence and knapsack problem. Implementation tips include carefully identifying state variables and defining recurrence relations. The time and space complexity of dynamic programming solutions is typically O(n) or O(n*m), and space complexity can often be optimized for 2D problems.",
      "createdAt": "2025-04-20T02:59:02.869936Z",
      "updatedAt": "2025-05-03T07:31:31.450603Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "dynamic programming",
        "complexity optimized",
        "solutions subproblems",
        "tips include",
        "fibonacci sequence",
        "knapsack problem",
        "building table",
        "principles break",
        "usually time",
        "identify state"
      ],
      "topics": [
        "Dynamic programming techniques",
        "Key principles for dynamic programming",
        "Two approaches: top-down with memoization and bottom-up iterative building",
        "Classic problems: Fibonacci sequence and knapsack problem",
        "Implementation tips for dynamic programming",
        "Time and space complexity of dynamic programming solutions",
        "Optimizing space complexity for 2D problems"
      ]
    }
  },
  {
    "note": {
      "id": "7d0c915e-f460-4e10-94da-a1d7ab350fda",
      "title": "Binary Search Trees",
      "content": "[\n  {\n    \"id\": \"d84e5a7c-f482-45d9-9d38-d8cea30dbe6a\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  },\n  {\n    \"id\": \"7800fb0a-bf80-42bf-ad3d-8eaa426a0e95\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🌳 Binary Search Trees (BST)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"10647273-24f4-4d5c-8ed5-bcf9c2d3132d\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Binary Search Tree (BST)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" is a classic data structure used for efficient searching, insertion, and deletion operations.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"821e957a-709a-4954-9685-7419c4a96415\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧩 Properties\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"3c6c82ba-c0fa-4f0c-9f6b-f239110495cd\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Each node has \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"at most two children\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": left and right.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"671e8347-0d01-4873-a5d6-4dd4e4a63ccb\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Left subtree\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" contains nodes with keys \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"less than\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" the parent node.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"353fe16a-9da4-4d52-9b08-274964812ef4\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Right subtree\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" contains nodes with keys \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"greater than\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" the parent node.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"83d8ec0c-c683-4190-bb63-dd4fcf506aaf\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Both left and right subtrees must also be \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"binary search trees\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \".\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"94d40825-1068-4f6a-ad75-1b93c4513946\",\n    \"type\": \"codeBlock\",\n    \"props\": {\n      \"language\": \"text\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"        8\\n       / \\\\\\n      3   10\\n     / \\\\    \\\\\\n    1   6    14\\n       / \\\\   /\\n      4   7 13\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"74306886-f7aa-4114-84fa-ecc6995106fc\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"⏱️ Time Complexity\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"26c9be51-0fa5-4038-a5de-aa4856564742\",\n    \"type\": \"table\",\n    \"props\": {\n      \"textColor\": \"default\"\n    },\n    \"content\": {\n      \"type\": \"tableContent\",\n      \"columnWidths\": [\n        null,\n        null,\n        null\n      ],\n      \"headerRows\": 1,\n      \"rows\": [\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Operation\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Average Case\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Worst Case\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Search\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(log n)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n) (unbalanced)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Insert\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(log n)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Delete\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(log n)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    \"children\": []\n  },\n  {\n    \"id\": \"f24fbdfd-393a-48f6-ba02-efc38ca2bcf1\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🔍 \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Worst case\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" occurs when the BST becomes a \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"linked list\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" (completely unbalanced).\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"5c9b4895-752a-4116-b794-e507fe14a671\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🛠️ Implementation Considerations\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"d8918ec0-6221-4d52-ab3c-b51495a2c81a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Balance is critical\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": an unbalanced BST can degrade to linear time operations.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"8f8d3a34-bd1c-42ed-89d5-705252489c7b\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Use \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"self-balancing\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" BSTs for optimal performance:\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"f0e7294b-8308-43c0-bbb5-ff6494ae13e1\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"AVL Trees\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": [\n          {\n            \"id\": \"c181ec73-0414-4900-addf-4075971c5097\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Red-Black Trees\",\n                \"styles\": {\n                  \"bold\": true\n                }\n              }\n            ],\n            \"children\": []\n          }\n        ]\n      },\n      {\n        \"id\": \"c66ec10e-976b-4110-9e3d-5340ef65876d\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"In-order traversal\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" yields a \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"sorted sequence\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" of the elements.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"7e6e3394-fd47-4c5f-8545-b61d924b69a2\",\n    \"type\": \"codeBlock\",\n    \"props\": {\n      \"language\": \"csharp\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"void InOrder(Node root) {\\n    if (root == null) return;\\n    InOrder(root.left);\\n    Console.Write(root.key + \\\" \\\");\\n    InOrder(root.right);\\n}\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"21aee547-16e2-4379-84ac-34fbb50869cc\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"✅ Use Cases\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"dd44463b-cefd-4ac0-96a9-00854add3e1d\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Dynamic set operations\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" (insert/delete/search)\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"8d66442f-6af7-44e6-b27d-993b5ae856ba\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"In-memory sorting\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"b01898a1-bda8-4409-89ec-dd0cc5321605\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Database indexes\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"d025314a-8956-4ca2-a496-6a1693a60365\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Symbol tables in compilers\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"b2f4ced9-3db6-483d-a150-2cbca30a3668\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "Binary search trees are a foundational data structure where each node can have at most two children: a left child and a right child. The left subtree of a node contains only nodes with keys less than the node's key, while the right subtree contains only nodes with keys greater than the node's key. Both the left and right subtrees are also binary search trees. The time complexity for searching in a binary search tree is efficient.",
      "createdAt": "2025-04-20T02:59:02.869936Z",
      "updatedAt": "2025-05-03T07:17:46.708247Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "binary search",
        "trees foundational",
        "node key",
        "subtree contains",
        "bsts time",
        "right child",
        "average worst",
        "delete log",
        "considerations balance",
        "red black"
      ],
      "topics": [
        "Binary search in trees",
        "Node key and subtree",
        "Time complexity of BSTs",
        "Deletion considerations",
        "Balancing BSTs",
        "Red-black trees"
      ]
    }
  },
  {
    "note": {
      "id": "ead722cc-6869-49c7-a242-36f20a49fa38",
      "title": "Deterministic and Non-Deterministic Automata",
      "content": "[\n  {\n    \"id\": \"5de60c4d-9226-411d-a672-cb97a17b0859\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🤖 Deterministic vs. Non-Deterministic Automata\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"2110cf35-24bc-4ba1-80c4-005b598d1e37\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"In \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"automata theory\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \", a key distinction is made between \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"deterministic\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" and \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"non-deterministic\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" models of computation. Both play essential roles in understanding formal languages, pattern recognition, and compiler design.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"e6ba843a-112d-4d65-aae4-d1196d884d62\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Deterministic Finite Automaton (DFA)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"08ce3098-9463-4d84-b36e-23b2dbba0d40\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"DFA\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" is a finite state machine where:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"7d216415-c9b8-44ae-b66d-76f167a942fb\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"For \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"each state\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" and \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"input symbol\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \", there is \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"exactly one\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" possible transition.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"c706eb1c-84df-48e0-9f73-cdf4affae2e4\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Given an input string, a DFA follows \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"a single path\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" of execution.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"a53e2a72-84f9-460e-9ae6-ad7c6e394a3b\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"It produces a \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"unique result\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" for any input.\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"990052f8-f771-452e-9ddc-276dc1a23eb9\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"✅ \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Key properties\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \":\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"b7578a44-32c0-4361-bf61-711e7aa5ab9e\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Simple to implement\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"6dca1f30-8846-4574-9075-32bfc7f666c1\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Recognizes \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"regular languages\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"a8e2e064-4c91-46c6-9738-163ca6dfffbf\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Widely used in \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"lexical analyzers\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \", \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"text processing\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \", and \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"pattern matching\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"4f1d16d7-286c-48cf-9935-c988fa5c3c58\",\n    \"type\": \"codeBlock\",\n    \"props\": {\n      \"language\": \"text\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"DFA = (Q, Σ, δ, q₀, F)\\nWhere:\\n  Q   = Set of states\\n  Σ   = Input alphabet\\n  δ   = Transition function (Q × Σ → Q)\\n  q₀  = Start state\\n  F   = Set of accepting states\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"de58a2f8-7c92-45ac-ba9b-5859a7482880\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Non-Deterministic Finite Automaton (NFA)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"a203a891-b91e-463d-9bb6-11816d2a99aa\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"An \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"NFA\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \", on the other hand:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"ca080bc0-20a5-4a0d-9c02-c640617cd679\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Allows \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"multiple possible transitions\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" for the same input from a state\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"992a9c80-51cd-4f42-8c08-f21884522b1d\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Can have transitions \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"without consuming input\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" (ε-transitions)\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"62c3aabb-3cfa-47b5-a631-0a0359c4e3c7\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Processes input by exploring \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"many computation paths simultaneously\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"03b283e6-5cb1-4e3e-9187-7cc864ca5381\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"✨ \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Highlights\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \":\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"5b991584-4c01-4612-a905-60a807f8af42\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"More \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"flexible\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" and often \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"easier to design\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"daffa6df-4266-4bee-9a2e-9f48faddfb2a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Also recognizes \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"regular languages\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"2f8063dd-680d-4dac-97c0-5b5c7e4c407b\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"The \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"powerset construction\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" (aka \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"subset construction\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \") can convert any NFA to an equivalent DFA\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"d3fd3112-ab89-4a66-a17e-7b85aae67171\",\n    \"type\": \"codeBlock\",\n    \"props\": {\n      \"language\": \"text\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"NFA = (Q, Σ, δ, q₀, F)\\nWhere:\\n  δ: Q × (Σ ∪ {ε}) → P(Q)\\n  (multiple next states possible, including ε-moves)\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"61e1023a-3c07-4457-8bff-db994a7144f5\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"⚖️ DFA vs NFA\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"ed6445b5-00b6-48db-bd6e-09c307da1d40\",\n    \"type\": \"table\",\n    \"props\": {\n      \"textColor\": \"default\"\n    },\n    \"content\": {\n      \"type\": \"tableContent\",\n      \"columnWidths\": [\n        null,\n        null,\n        null\n      ],\n      \"headerRows\": 1,\n      \"rows\": [\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Feature\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"DFA\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"NFA\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Transitions\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"One per symbol per state\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Zero, one, or many\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Simultaneous Paths\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"No\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Yes\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Expressive Power\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Regular languages\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Regular languages (same as DFA)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Implementation\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Easier to execute\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Easier to design\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Conversion\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Not needed\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Requires powerset construction\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    \"children\": []\n  },\n  {\n    \"id\": \"2b82d76b-ab95-4935-86c0-0617ae0b8eea\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"💡 Why It Matters\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"df662ab1-2a5a-4a88-b8ca-9412eec0aa33\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Understanding DFAs and NFAs helps you:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"ae724917-8673-408f-80ac-197422b33b0a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Build \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"efficient lexical analyzers\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" and \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"regex engines\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"9cd6b5e5-3d46-4878-876a-4c8e74a331a8\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Analyze \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"language recognition limits\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"1292e653-1af5-4832-9147-d246120e4b48\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Optimize \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"network protocols\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" and \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"AI state machines\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"fe45b9f7-86fa-49e1-aad2-a672b8da45d7\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Grasp the \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"foundations of computational complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"e1eedaa0-625e-42a8-8a62-dc9a6ad33213\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "A deterministic finite automaton (DFA) is a type of automaton with only one transition for each state and input symbol, ensuring that a specific input string will always lead to the same result. In contrast, a non-deterministic finite automaton (NFA) allows for multiple possible transitions from a state with the same input symbol, leading to different potential states.",
      "createdAt": "2025-04-30T02:06:21.413199Z",
      "updatedAt": "2025-05-03T07:13:36.800213Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "finite automaton",
        "difference deterministic",
        "dfa known",
        "compiler",
        "different potential",
        "state",
        "contrast non",
        "lead",
        "key",
        "string way"
      ],
      "topics": [
        "Finite automaton vs non-deterministic finite automaton",
        "Difference between deterministic and non-deterministic DFAs",
        "DFAs known in compiler design",
        "State transitions in DFAs",
        "Contrast between deterministic and non-deterministic automata",
        "Potential states in NFAs",
        "How key differences in DFAs can lead to different outcomes",
        "Analyzing string processing in DFAs"
      ]
    }
  },
  {
    "note": {
      "id": "b98b1878-9da7-49e4-96dc-65d870233419",
      "title": "Efficient Searching Algorithms",
      "content": "[\n  {\n    \"id\": \"ea4276d7-4759-425b-9e35-348d6a252f92\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 1\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"📘 Comprehensive Guide to Efficient Searching Algorithms\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"9788adeb-d6a3-4aea-b33d-6122ad344b5d\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"1. 🔍 Binary Search\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"1a6bb34c-c7e9-41ca-bd47-26428c52705a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"✅ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Works on\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Sorted arrays\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"3a8f4754-eaf4-43a8-93ae-e2e57fba1e2c\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⏱ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(log n)\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"e362d003-53f2-46cc-bae7-c0a3a037fc1b\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"📚 \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Description\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Divides the search interval in half each iteration\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"2642a3c4-e8d5-404b-b43d-f0a7684fa934\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⚠️ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Implementation Considerations\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \":\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"03f3cdf9-7c8d-4b1c-b174-6036b10f51f0\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Handle edge cases (empty arrays, single elements)\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"e0280dfe-d752-4eba-8307-84732a13f4d9\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Use safe mid-point calculation to avoid integer overflow: \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"mid = low + (high - low) / 2\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"767ca51b-efb4-4b8a-8868-4a0cc7d0e11b\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Can be implemented iteratively or recursively\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"7e45c1ba-4a12-46ab-bd2a-e3b7564bd7b4\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"2. 📈 Interpolation Search\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"e4190441-ac60-430a-a148-e4f5fd7053a0\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"✅ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Best for\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Uniformly distributed sorted data\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"6728683e-04d1-4183-b408-956e3ed85e49\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⏱ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(log log n)\",\n            \"styles\": {\n              \"code\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" average, \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(n)\",\n            \"styles\": {\n              \"code\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" worst case\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"03baa7c9-2a66-40f9-8d87-59d8fc22802b\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"📐 \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Formula\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"pos = low + ((x - arr[low]) * (high - low)) / (arr[high] - arr[low])\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"33a6b5e3-9a64-4f47-934f-7553eb4f967c\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧠 Works best when values are evenly distributed\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"96aeadc9-ac07-40f1-a61f-0e43357228e0\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"3. 🦘 Jump (Block) Search\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"de57e3a6-7e41-46c1-8d54-c028cd55402d\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"✅ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Works on\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Sorted arrays\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"5d282958-8079-4042-b601-94272d18b0c7\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⏱ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(√n)\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"02ed5c77-7066-4c95-87ef-ed2aadb4c7da\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"📦 \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Jump size\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Typically \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"√n\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"57994546-9bea-45d0-a784-29a67d15eb05\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"📝 Useful when jumping is cheaper than full linear scan\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"cdb0c157-057a-49e0-bca0-87368fef3132\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"4. 🚀 Exponential Search\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"37ac462e-5392-4d37-beae-74102b290978\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"✅ `\",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Best for\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Unbounded or infinite sorted arrays\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"674d8365-f3de-4e6f-9804-08b9273776a1\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⏱ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(log n)\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"63d3d321-fac7-4800-be36-2c49391b79ff\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🔍 \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Steps\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \":\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": [\n          {\n            \"id\": \"2f7d6840-2456-4672-85a6-d75b205151b5\",\n            \"type\": \"numberedListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Double the index until the target is smaller than current element\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          },\n          {\n            \"id\": \"730af2cc-1877-42e7-9f89-611588e7af5b\",\n            \"type\": \"numberedListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Use binary search in the found range\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"22627cdb-a7f8-4c8d-b03f-435c74ae14b0\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"5. ➗ Ternary Search\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"13d71bc5-09cf-466b-89ce-572e8a89aa8f\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🔄 \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Divides into\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Three parts instead of two\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"eab907a0-7ccd-4a9c-9a57-44d4c5dca7ed\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⏱ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(log₃ n)\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"efe60c61-761b-41fc-be80-570fa3ff7706\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⚠️ Typically worse than binary search due to more comparisons per step\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"64d579e6-bd77-4dd3-8458-b7573a23bef1\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"6. 🔢 Fibonacci Search\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"df3a91dc-c052-441e-88a4-4c33603da2b9\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"✅ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Uses\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Fibonacci numbers to split array\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"990b55eb-52d4-423e-92ec-c74a267da22c\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⏱ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(log n)\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"da3fdcbf-7fda-4af5-afcd-75c1d34d7e05\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"📼 \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Optimized for\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Magnetic tapes or sequential media\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"9713bf30-a719-413b-91a8-29a250a837a4\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"➕ Only uses addition and subtraction (no division)\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"90198202-07ad-4c06-99c2-39f222c792e9\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"7. #️⃣ Hash-Based Searching\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"797c001c-31c1-439c-80ef-8c1d0d211f99\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⏱ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(1)\",\n            \"styles\": {\n              \"code\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" average case\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"5221aa69-8860-4472-8034-fda257fbbda9\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⚙️ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Requires\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Good hash function and collision resolution\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"fdf5940b-f030-403c-991e-a33ca1eb948f\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🧠 \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Trade-off\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Faster searches, higher memory usage\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"16fa9d77-7d65-4cbb-ba52-e6678b0fa94f\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🔁 Great for repeated lookups\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"f5bbc8a1-eedc-49a6-81c1-a52fbed4110a\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"8. 🌲 B-Trees and B+ Trees\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"869f4cf2-3533-4540-bc63-4cb43d7bd7f1\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"✅ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Data Structure\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Self-balancing trees\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"d4b95fc9-2a00-4949-9246-e38c043ad42d\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⏱ \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"O(log n)\",\n            \"styles\": {\n              \"code\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"101b4814-7644-4977-ae06-391edb1bcae6\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"📀 \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"Optimized for\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \": Disk I/O and large data blocks\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"1a524785-1691-422b-bc45-e9f69dc63c12\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"💾 Widely used in databases and file systems\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"70e63dfa-34ae-40fc-94df-c5ab613fdf98\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🛠 Implementation Tips\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"916ae4f4-57b6-4957-ba99-3dd9fd7e0fc4\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🔍 Choose the algorithm based on:\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": [\n          {\n            \"id\": \"ffc9d06e-4831-4f54-9368-c54f7d14289a\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Data structure\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          },\n          {\n            \"id\": \"6dcd6bec-cf6a-40ad-97c9-ba7219ed070e\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Data size\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          },\n          {\n            \"id\": \"131e4c88-9484-4523-b6e2-887d47a2f9b0\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Distribution characteristics\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": []\n          }\n        ]\n      },\n      {\n        \"id\": \"f4765eb4-fbc5-4b3d-8629-6f07783f0007\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🧠 Consider memory and CPU cache behavior\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"f94d852c-d3a4-4249-bf8d-c2fead2a4e3a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"⚡ For small datasets, \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"linear search may outperform\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" others due to low overhead\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"b74be29b-286a-4212-af16-b95f46d6a684\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"🔄 For dynamic data, balance between \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"search\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" and \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"update\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \" efficiency\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"66e03761-a6e2-4640-8229-d1e01b3f720b\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  },\n  {\n    \"id\": \"1011d95c-d2b8-4c1f-8b56-dc5360eababe\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "The text outlines various efficient searching algorithms such as binary search, exponential search, ternary search, fibonacci search, hash-based searching, self-balancing tree data structures, and jump block search. It emphasizes that the time complexity of a search algorithm is influenced by factors such as data size, data distribution, array size, and the number of iterations.",
      "createdAt": "2025-04-20T03:01:39.784182Z",
      "updatedAt": "2025-05-03T07:03:39.393239Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "searching algorithms",
        "use binary",
        "overflow implemented",
        "array size",
        "data time",
        "log worse",
        "high arr",
        "uses fibonacci",
        "advantage works",
        "effectively magnetic"
      ],
      "topics": [
        "Efficient searching algorithms",
        "Binary search",
        "Exponential search",
        "Ternary search",
        "Fibonacci search",
        "Hash-based searching",
        "Self-balancing tree data structures",
        "Jump block search",
        "Influence of data size on time complexity",
        "Effect of data distribution on time complexity",
        "Impact of array size on search algorithms",
        "Number of iterations in search algorithms"
      ]
    }
  },
  {
    "note": {
      "id": "52ad0b1f-f106-4ec1-92ed-5b2e37db1343",
      "title": "Introduction to Automata Theory",
      "content": "[\n  {\n    \"id\": \"7dc80a3e-c76c-4818-975a-2add92f98cb8\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 1\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🤖 Automata Theory in Computer Science\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"579a81ce-50e6-4f2e-bfee-463178cdf1ab\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Automata theory\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" is a foundational area of theoretical computer science that focuses on the study of \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"abstract computational models\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"—called \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"automata\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"—and the \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"formal languages\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" they can recognize.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"63d0f796-2837-434e-b18e-debf030b2864\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"It provides a framework for understanding how machines compute functions and solve problems, playing a crucial role in the design of:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"96cce4b0-c5f0-4c8c-86b4-185598f3a05a\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Compilers\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"45ef1637-054d-48e8-80ac-f4f55ba7e65c\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Interpreters\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"4f017f2f-aeba-40ca-a308-36103a1920d5\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Various computational systems\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"ffd9fb25-06b5-452a-99a7-0e5f0186a290\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Types of Automata\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"5d1ba17a-b35d-4817-a4d2-07d35e058f36\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"1. \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Finite Automata\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"2bf77996-226c-4a73-a16d-9e887a04548f\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"The \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"simplest\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" computational model.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"c5313e45-a19b-4cc3-a383-29f7fcc79f9c\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Recognizes \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"regular languages\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": [\n          {\n            \"id\": \"b553fec7-c646-4e01-b054-b6dfaeb1a9b5\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Commonly used in:\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": [\n              {\n                \"id\": \"072c6704-8034-444d-864c-536328b6fbb3\",\n                \"type\": \"bulletListItem\",\n                \"props\": {\n                  \"textColor\": \"default\",\n                  \"backgroundColor\": \"default\",\n                  \"textAlignment\": \"left\"\n                },\n                \"content\": [\n                  {\n                    \"type\": \"text\",\n                    \"text\": \"Text processing\",\n                    \"styles\": {}\n                  }\n                ],\n                \"children\": []\n              },\n              {\n                \"id\": \"9ac30610-d101-492d-86d6-9aa39b0ea71f\",\n                \"type\": \"bulletListItem\",\n                \"props\": {\n                  \"textColor\": \"default\",\n                  \"backgroundColor\": \"default\",\n                  \"textAlignment\": \"left\"\n                },\n                \"content\": [\n                  {\n                    \"type\": \"text\",\n                    \"text\": \"Lexical analysis\",\n                    \"styles\": {}\n                  }\n                ],\n                \"children\": []\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"8791942b-e561-435f-8c50-679fc2877c94\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"2. \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Pushdown Automata\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"5136b56e-c502-4bbe-9c81-4714c5dfb551\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A more powerful model that uses a \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"stack\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \".\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"d66ce592-c17c-432f-8b83-db736dd89f56\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Recognizes \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"context-free languages\",\n            \"styles\": {\n              \"bold\": true\n            }\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \".\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": [\n          {\n            \"id\": \"c968adf4-9214-47a5-8a7f-7503cf509d6d\",\n            \"type\": \"bulletListItem\",\n            \"props\": {\n              \"textColor\": \"default\",\n              \"backgroundColor\": \"default\",\n              \"textAlignment\": \"left\"\n            },\n            \"content\": [\n              {\n                \"type\": \"text\",\n                \"text\": \"Well-suited for:\",\n                \"styles\": {}\n              }\n            ],\n            \"children\": [\n              {\n                \"id\": \"8f3b2e66-9c88-4dde-a750-63ff93ef8a4e\",\n                \"type\": \"bulletListItem\",\n                \"props\": {\n                  \"textColor\": \"default\",\n                  \"backgroundColor\": \"default\",\n                  \"textAlignment\": \"left\"\n                },\n                \"content\": [\n                  {\n                    \"type\": \"text\",\n                    \"text\": \"Parsing programming languages\",\n                    \"styles\": {}\n                  }\n                ],\n                \"children\": []\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  },\n  {\n    \"id\": \"36e47aae-ce2b-4464-a3d4-53a37f4da004\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"3. \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Turing Machines\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"4b9205a2-b977-490a-9451-47b16c79c9ec\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"The \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"most powerful\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" model.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"e319bac4-0eda-4da3-bc9d-52c037349ee3\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Capable of simulating \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"any algorithmic process\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \".\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"3461b911-adaf-4f3d-b177-945672347444\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Helps define the \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"limits of computation\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \".\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"b17b7550-fee3-4d93-a966-37bc8a48404b\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🧠 Key Concepts in Automata Theory\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"505f93fc-e0af-4d42-bebe-86b69a859dba\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Determinism vs. Non-Determinism\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Understand how different machines make decisions based on input.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"189a0ca2-7667-44b1-b680-000de7bae534\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"State Transitions\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" The rules governing how automata move from one state to another.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"9e6b3503-3693-47c8-b68b-411fc7a5c67b\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Language Hierarchies\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Explore classifications of languages (regular, context-free, etc.).\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"23da2fcf-361a-48d5-9be6-664615055fc7\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Computational Complexity\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Study the \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"efficiency\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" and \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"limitations\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" of computational models.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"36180f06-c80c-4e70-92aa-621707ccc411\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🎓 Why Study Automata?\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"85de341f-6a47-4ed7-bbe0-fb587e0c796b\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Understanding automata equips students and professionals with tools to:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"6e334b7f-7f05-4c94-9f08-17b5f3dcbc8a\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Analyze and construct \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"efficient algorithms\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"58838058-0a95-4323-a4cb-ac7be34716bc\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Validate the \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"correctness of software systems\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"e659e7ea-594e-485a-bc26-f30b3447a4d0\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Comprehend the \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"theoretical limits\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" of computation\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"4afa4dd7-c0d1-4b7b-930e-8fdc1a55e3d4\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "Automata theory is a key field in theoretical computer science that explores abstract computational models called automata and the languages they can recognize. This theory helps in understanding how machines compute functions and solve problems, and is essential for designing compilers, interpreters, and other computational systems.",
      "createdAt": "2025-04-30T02:01:49.720296Z",
      "updatedAt": "2025-05-03T05:20:51.730869Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "theory automata",
        "software systems",
        "theoretical limits",
        "validate correctness",
        "free languages",
        "problems playing",
        "like pushdown",
        "foundational area",
        "students professionals",
        "key"
      ],
      "topics": [
        "Automata Theory and its Significance in Computer Science",
        "Exploring Software Systems through Automata Theory",
        "Understanding Theoretical Limits in Automata Theory",
        "Validating Correctness in Software Systems using Automata",
        "Free Languages and their Role in Automata Theory",
        "Analyzing Problems in Playing with Automata",
        "Comparing Automata Models like Pushdown Automata",
        "Exploring Automata Theory as a Foundational Area in Computer Science",
        "Benefits of Studying Automata Theory for Students and Professionals"
      ]
    }
  },
  {
    "note": {
      "id": "e566187c-ab68-4378-8199-54bcf84afd65",
      "title": "Graph Traversal Algorithms",
      "content": "[\n  {\n    \"id\": \"f842e0a3-1004-4094-b627-feee99539b5e\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Key Graph Traversal Algorithms:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"937c715c-43b7-4c2e-8922-10b495215cb4\",\n    \"type\": \"numberedListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Breadth-First Search (BFS)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"84ca320f-e2d1-4e87-b3f8-2a08ba7cb51e\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Uses a queue data structure\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"02f975eb-436e-45f6-9460-18a0331aca06\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Visits all neighbors before moving to next level\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"1e13f485-f2e6-41bc-b3ee-3bab20e3e611\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity: O(V + E) where V is vertices, E is edges\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"1da1dd11-14e6-4293-9cf8-dff37588d7dc\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Great for finding shortest path in unweighted graphs\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"763a4e1f-5a6a-4385-b91f-7ad3288cb10c\",\n    \"type\": \"numberedListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Depth-First Search (DFS)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"21047536-bfcd-429f-a5ab-ce2b418d7929\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Uses a stack (or recursion)\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"e9204947-0251-4df3-bc1d-992a3c20580e\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Explores as far as possible along each branch\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"d724592a-cedb-4401-97a4-91b92266f2c5\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity: O(V + E)\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"ea348a10-f2cb-4e1e-a434-426f0e2fe75d\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Applications: topological sorting, cycle detection\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"9f3e46b1-403a-4b28-8f4f-996ff3e6ab2a\",\n    \"type\": \"numberedListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Dijkstra's Algorithm\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"97cbb2b5-dc9e-48b5-ab42-f39de703e453\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Finds shortest paths from source to all vertices\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"2a6399bb-6625-48ae-b56a-70cfd90e071b\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Uses priority queue\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"aabd5769-6d78-4492-b276-c78aa711bf9e\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Time Complexity: O((V + E) log V) with binary heap\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"e614b5b4-39a7-458a-b2f9-7da2826ec4a0\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Doesn't work with negative weights\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"0b39e340-55f6-4996-982f-3e3fec25dbdb\",\n    \"type\": \"numberedListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A* Search\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"ceb9b66a-534b-43af-b6e1-9160bb6b1087\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Extension of Dijkstra's using heuristics\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"9ef48c3c-d61c-4bc0-9d27-a1e7f3db913f\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Optimizes for path to specific target\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"502d13e7-eada-4d8a-ac09-cd656290564f\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Widely used in pathfinding and graph traversal\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"4018e9c2-a4f1-415c-99c8-8b4c81af39ba\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "The text discusses two key graph traversal algorithms: breadth-first search (BFS) and depth-first search (DFS). BFS uses a queue data structure to visit all neighbors before moving to the next level, with a time complexity of O(V + E) where V is vertices and E is edges. It is useful for finding the shortest path in unweighted graphs. On the other hand, DFS uses a stack and explores as far as possible along each branch, with a time complexity of O(V + E). It has applications in topological sorting and cycle detection.",
      "createdAt": "2025-04-20T02:59:02.869936Z",
      "updatedAt": "2025-05-03T04:58:03.452111Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "graph traversal",
        "optimizes path",
        "dfs bfs",
        "visits neighbors",
        "heuristics",
        "binary heap",
        "detection dijkstra",
        "uses priority",
        "time",
        "negative weights"
      ],
      "topics": [
        "Graph Traversal Algorithms",
        "Optimizing Path with DFS and BFS",
        "Visiting Neighbors in Graphs",
        "Heuristics in Graph Traversal",
        "Binary Heap for Priority Queue",
        "Dijkstra's Algorithm for Path Detection",
        "Using Priority in Graph Algorithms",
        "Handling Negative Weights in Paths"
      ]
    }
  },
  {
    "note": {
      "id": "86e1eff3-60a4-4a21-92ec-9fd48191023c",
      "title": "Understanding Common Data Structures in Computer Science",
      "content": "[\n  {\n    \"id\": \"7fb0675d-cfb2-4570-a296-7fc8de08424b\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 1\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"📊 Data Structures in Computer Science\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"5714fff0-4e1d-4404-8371-1b497d775e91\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Data structures\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" are essential components of computer science that enable developers to manage and organize data efficiently. They provide a way to store and retrieve data in a structured manner, optimizing performance for different types of operations.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"78f8eb07-b855-45f8-a638-a5878720c177\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  },\n  {\n    \"id\": \"036a77d3-5d6d-41d0-bea4-4c2336302afa\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Fundamental Data Structures\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"b9ba4b6f-da16-47ed-939c-ff17a383e112\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Arrays\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Fixed-size, indexed collections of elements that allow for constant time access. Ideal for scenarios where data is frequently read but rarely modified.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"b66fa4d6-318f-4366-b4ae-acec160dacfe\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Linked Lists\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Composed of nodes that point to the next element. They support dynamic memory allocation and efficient insertions/deletions.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"78e34594-c0c0-4c00-8f22-421058fc54ac\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Stacks\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" A \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"Last-In-First-Out (LIFO)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" data structure. Commonly used in:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"4901ffe3-5a46-4ee1-a30c-3fb253d72e25\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Undo mechanisms\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"f3c9e2df-e212-484a-a8e5-2cf0549f50b2\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Expression evaluation\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"4a6ec668-b8ac-498b-a2ad-6e55249a5b95\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Queues\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" A \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"First-In-First-Out (FIFO)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" structure. Often applied in:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"49e55238-b0df-48b0-aa9b-1a98d63f0d60\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Task scheduling\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"75e9f81f-c32f-4e9b-8e98-85ceb58ec94b\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Print/job queues\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"57031d22-9f3e-4e30-b458-b6388067978c\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Hash Tables\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Store data in \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"key-value pairs\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" for fast retrieval. Widely used in:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"0555fc80-78cf-43f0-9a93-1002a73e3a74\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Caches\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"f0051003-65bf-4466-8fe0-7ad8feb66e33\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Databases\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"5eb9199d-ffe9-452e-9f6a-c693efa81422\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Trees\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Organize data \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"hierarchically\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" (e.g., binary trees, binary search trees) to enable efficient:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"b692eda9-002a-4ce6-a326-e7313594ebab\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Searching\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"b84d1479-b920-4ccf-afcf-d149f4b4e0ea\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Insertion\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"bf16bbab-9875-4874-86bb-ef920043ef83\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Deletion\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"c0d47058-d2de-4a15-80b6-5eb5985f4bad\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Graphs\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Represent relationships between data points. Use cases include:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"43ec6925-fd31-4aff-8314-a288824d186e\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Social networks\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"19e2a907-310c-4c20-9489-9011650c26a0\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Recommendation systems\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"a26f2b85-f84e-4660-be36-69596b65be56\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Navigation/routing systems\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"a1ab4c4d-686d-4009-a48a-bb284c08cd0b\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"💡 Why Data Structures Matter\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"6f913676-2174-459b-b0b7-b9f61c22ec93\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Understanding the \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"characteristics and trade-offs\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" of these structures is critical for selecting the right one for a specific task. Choosing an inappropriate data structure can result in:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"012eb01e-4ec1-45af-a6cf-333b9092d4e3\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Poor performance\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"33b21ef0-fdba-4b13-bfb5-84df69222eb3\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Increased complexity\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"52efb346-87b5-4a53-b63c-8ba8236699e2\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Mastering data structures lays the foundation for writing efficient algorithms and building high-performance applications.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"366700e4-a1c5-4fee-849a-76761d26e8d6\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "The text discusses different data structures such as arrays, linked lists, stacks, queues, hash tables, trees, and graphs. Arrays are fixed-size collections of elements with constant time access, making them efficient for frequent reading. Linked lists consist of nodes pointing to the next element.",
      "createdAt": "2025-04-29T21:55:32.978355Z",
      "updatedAt": "2025-05-03T05:12:46.898115Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "data structures",
        "include arrays",
        "reading linked",
        "allowing dynamic",
        "different types",
        "queues hash",
        "follows lifo",
        "frequent",
        "deletion",
        "enable developers"
      ],
      "topics": [
        "Overview of data structures",
        "Arrays: fixed-size collections with constant time access",
        "Linked lists: nodes pointing to the next element",
        "Stacks: follow LIFO (Last In, First Out) principle",
        "Queues: FIFO (First In, First Out) ordering",
        "Hash tables: enabling dynamic insertion and deletion",
        "Trees and graphs for organizing different types of data",
        "Importance of data structures in enabling developers"
      ]
    }
  },
  {
    "note": {
      "id": "358d4ca5-6276-4e7e-8595-f013768ce7fa",
      "title": "Hash Tables and Collision Resolution",
      "content": "[\n  {\n    \"id\": \"e3cc755b-a97f-48be-bb40-9cdd3db8ba6d\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 1\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🗃️ Hash Tables Overview\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"84d6e555-558f-414c-b235-0870128f4e34\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"1. 📦 Structure\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"19a099ca-1675-4ba8-8d7a-00e9d68680a7\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Stores \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"key-value pairs\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"3f503211-ab69-4c8a-8500-5f644c6f1928\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Provides \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"O(1)\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" average time complexity for:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"8ca1911f-19d7-422c-98fe-120e81a1b475\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Insertion\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"e21574e1-8d79-46c6-94c9-6c94c0ac580a\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Deletion\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"cae6934d-8565-4868-8168-ad212368ae32\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Lookup\",\n            \"styles\": {}\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"2b969e51-caa1-4f0a-a99c-9e4086e55cd9\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \" Uses a \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"hash function\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" to map keys to array indices\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"6058f68e-b501-4d8c-a65a-43ff12b522fb\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"A good hash function should:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": [\n      {\n        \"id\": \"44928bb6-f286-45c0-a50a-890894e6f8e4\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Distribute keys \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"uniformly\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      },\n      {\n        \"id\": \"ea395f50-c6ae-4bf6-8c93-21b377ccbc11\",\n        \"type\": \"bulletListItem\",\n        \"props\": {\n          \"textColor\": \"default\",\n          \"backgroundColor\": \"default\",\n          \"textAlignment\": \"left\"\n        },\n        \"content\": [\n          {\n            \"type\": \"text\",\n            \"text\": \"Minimize \",\n            \"styles\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"text\": \"collisions\",\n            \"styles\": {\n              \"bold\": true\n            }\n          }\n        ],\n        \"children\": []\n      }\n    ]\n  },\n  {\n    \"id\": \"9a179c56-c6e3-44ec-9dac-a8e1796731cb\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"2. 🧩 Collision Resolution Techniques\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"178507dc-b185-4c3e-aacb-aeb06c71d1a9\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"When multiple keys hash to the same index, collisions occur. Here are common strategies to handle them:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"f57cc322-1c87-4e3c-9ee9-d0ba6dd23b16\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🔗 Chaining\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"ccb0c1b3-18c8-4808-801d-83f8018eb0a5\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Each bucket holds a \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"linked list\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" of entries.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"963d068d-f796-4fa8-b02f-72783d0148d8\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 3\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"🏃 Open Addressing\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"ba4f5653-6712-46df-bd03-fa81b0ff0065\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Finds another spot within the array when a collision occurs:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"99122d32-222e-42fe-bc76-4f5947293412\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Linear Probing\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Check the \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"next\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" slot sequentially until an empty one is found.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"e49467fd-144a-4be6-bf53-37e6be7024b8\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Quadratic Probing\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Check slots at \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"quadratic intervals\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" (e.g., 1², 2², 3², ...).\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"1a9bd84f-9268-45a2-a36b-50e60719acad\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Double Hashing\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" Use a \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"second hash function\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" to determine the step size for probing.\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"70106714-fd60-4ee3-95c1-3354a54faa76\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"3. 📊 Load Factor\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"47a4115c-535a-4be4-b7b2-a2ddef5ce473\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Performance degrades as load factor increases\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"c6f7f116-dc96-40b8-a8c4-9f6d45775db0\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Recommended to keep it \",\n        \"styles\": {}\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \"below 0.7\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"220856ad-fcf5-4241-98ff-a8d78e4ab1cb\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Resizing\",\n        \"styles\": {\n          \"bold\": true\n        }\n      },\n      {\n        \"type\": \"text\",\n        \"text\": \" the table is triggered when the threshold is exceeded\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"4b4a5d1c-0a6a-4c1b-81fa-6d5e939fd8f7\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"4. ⚙️ Performance\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"50b55f97-5092-4605-a672-8f78807c0a06\",\n    \"type\": \"table\",\n    \"props\": {\n      \"textColor\": \"default\"\n    },\n    \"content\": {\n      \"type\": \"tableContent\",\n      \"columnWidths\": [\n        null,\n        null,\n        null\n      ],\n      \"headerRows\": 1,\n      \"rows\": [\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Operation\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Average Case\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Worst Case\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        },\n        {\n          \"cells\": [\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"Insert/Search/Delete\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(1)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            },\n            {\n              \"type\": \"tableCell\",\n              \"content\": [\n                {\n                  \"type\": \"text\",\n                  \"text\": \"O(n) (in case of many collisions)\",\n                  \"styles\": {}\n                }\n              ],\n              \"props\": {\n                \"colspan\": 1,\n                \"rowspan\": 1,\n                \"backgroundColor\": \"default\",\n                \"textColor\": \"default\",\n                \"textAlignment\": \"left\"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    \"children\": []\n  },\n  {\n    \"id\": \"f1c94658-9995-49d7-8690-88c5023b8b9b\",\n    \"type\": \"heading\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\",\n      \"level\": 2\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"5. 💡 Applications\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"b5c806e5-4742-47ae-b109-47476e59a55e\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Hash tables are widely used in:\",\n        \"styles\": {}\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"8098304b-0f9d-4fda-835d-01217e21a719\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Implementing sets and maps\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"4e417085-2dfd-4cd4-9c93-cfc551ab8110\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Caching mechanisms\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"3dea0103-e6f3-4421-be66-bb31a88868d2\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Database indexing\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"7262ea4a-ba52-4f97-baf2-1f40068460ff\",\n    \"type\": \"bulletListItem\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [\n      {\n        \"type\": \"text\",\n        \"text\": \"Duplicate detection\",\n        \"styles\": {\n          \"bold\": true\n        }\n      }\n    ],\n    \"children\": []\n  },\n  {\n    \"id\": \"34bf40ba-d022-4929-b596-3d63f1f1362f\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  },\n  {\n    \"id\": \"1109eb3c-61f8-4158-902d-39ea5c30fc17\",\n    \"type\": \"paragraph\",\n    \"props\": {\n      \"textColor\": \"default\",\n      \"backgroundColor\": \"default\",\n      \"textAlignment\": \"left\"\n    },\n    \"content\": [],\n    \"children\": []\n  }\n]",
      "summary": "The text discusses hash tables and collision resolution techniques. Hash tables are a key-value storage structure with an average access time of O(1) that uses a hash function to map keys to array indices. The hash function should distribute keys uniformly. Collision resolution techniques include chaining, where each bucket contains a linked list of entries, and open addressing methods like linear probing and double hashing. Linear probing checks the next slot sequentially, while double hashing uses a second hash function for an offset.",
      "createdAt": "2025-04-20T02:59:02.869936Z",
      "updatedAt": "2025-05-03T06:48:39.404353Z",
      "author": {
        "id": "57feec55-a21e-4e88-8ef7-062cbe83cb57",
        "userName": "user@example.com"
      },
      "folder": {
        "id": "fbf26236-bc3a-4f11-8359-daef2798b967",
        "name": "Core Computer Science Concepts & Project Ideas"
      },
      "keywords": [
        "hash tables",
        "collision resolution",
        "indexing duplicate",
        "addressing methods",
        "storage average",
        "chaining bucket",
        "slots quadratic",
        "time uses",
        "delete worst",
        "insert"
      ],
      "topics": [
        "Hash tables and collision resolution techniques",
        "Indexing duplicate in hash tables",
        "Addressing methods for hash tables",
        "Storage average in hash tables",
        "Chaining bucket in hash tables",
        "Slots quadratic in hash tables",
        "Time uses in hash tables",
        "Worst-case scenario for delete operation in hash tables",
        "Insert operation in hash tables"
      ]
    }
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

export const mockScores : AssignNoteFolderResponse = {
  "scores": [
    {
      "folderId": "284d7f45-5fb5-4564-b68b-b7fe8fe14952",
      "folderName": "Computer Science Notes",
      "score": 0.651205587387085
    },
    {
      "folderId": "276959e3-0aed-4980-bfc2-ff571361e92c",
      "folderName": "Medical Technology Notes",
      "score": 0.6366117417812348
    }
  ]
}