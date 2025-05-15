import { useState, useRef, useEffect } from 'react';
import { Markmap, deriveOptions } from 'markmap-view';
import { transformer } from './markmap';
import { Note } from '@/types/note';


// const initValue = `# Data Structures
// ## Linear Data Structures
// - **Array**
//   - Fixed-size collection of elements
//   - Elements accessed by index
//   - Example: [1, 2, 3, 4, 5]
// - **Linked List**
//   - Consists of nodes with data and a reference to the next node
//   - Types:
//     - Singly Linked List
//     - Doubly Linked List
//     - Circular Linked List
// - **Stack**
//   - Last In, First Out (LIFO) structure
//   - Operations: Push, Pop, Peek
//   - Example: Browser history
// - **Queue**
//   - First In, First Out (FIFO) structure
//   - Operations: Enqueue, Dequeue
//   - Example: Print queue

// ## Non-Linear Data Structures
// - **Tree**
//   - Hierarchical structure with nodes
//   - Types:
//     - Binary Tree
//     - Binary Search Tree (BST)
//     - AVL Tree
//     - Heap
// - **Graph**
//   - Consists of vertices (nodes) and edges (connections)
//   - Types:
//     - Directed Graph
//     - Undirected Graph
//     - Weighted Graph
//     - Unweighted Graph
//   - Algorithms: Dijkstra, BFS, DFS

// ## Hashing
// - **Hash Table**
//   - Stores key-value pairs
//   - Operations: Insert, Search, Delete
//   - Example: Dictionary in Python

// ## Advanced Data Structures
// - **Trie**
//   - Tree-like structure for storing strings
//   - Used in autocomplete, dictionaries
// - **Disjoint Set**
//   - Union-Find structure used to manage sets
//   - Operations: Union, Find
// - **Segment Tree**
//   - Allows efficient range queries and updates
//   - Used in computational geometry

// ## Searching and Sorting Algorithms
// - **Sorting Algorithms**
//   - Bubble Sort, Quick Sort, Merge Sort, Heap Sort
//   - Time complexity varies: O(n^2), O(n log n)
// - **Searching Algorithms**
//   - Linear Search
//   - Binary Search (on sorted arrays)
// `;

type MarkmapProps = {
    note : Note   
}

export default function MarkmapHooks({note} : MarkmapProps) {
  const [value, setValue] = useState<string | null>(null);
  const refSvg = useRef<SVGSVGElement>(null);
  const refMm = useRef<Markmap>(null);
  
  
  const markmapOptions = deriveOptions({
    color: ['#6b7280', '#6666ff', '#b3b3ff'],
    lineWidth: 2,
    spacingVertical:20,
    spacingHorizontal: 300,
    nodeMinHeight: 300,
    initialExpandLevel: 1,
    fitRatio: 100
  });

  useEffect(() => {
    if(note && note.mindmap){
        setValue(note.mindmap);
    }
  }, [note])
  
  useEffect(() => {
    if (refMm.current) return;
    if(!value) return;
    const mm = Markmap.create(refSvg.current, markmapOptions);
    refMm.current = mm;
  }, [markmapOptions]);

  useEffect(() => {
    const mm = refMm.current;
    if (!mm) return;
    if(!value) return;
    const { root } = transformer.transform(value);
    mm.setData(root).then(() => mm.fit());
  }, [value]);

  // useEffect(() => {
  //   const mm = refMm.current;
  //   if (!mm) return;
  //   const onResize = () => mm.fit();
  //   window.addEventListener('resize', onResize);
  //   return () => window.removeEventListener('resize', onResize);
  // }, []);

  if(!value) return (
    <div>Loading mind map...</div>
  )

  return (
    <div className="flex h-[80vh]">
      <div className="flex-1 relative">
        <svg ref={refSvg} className="w-full min-h-full"/>
      </div>
    </div>
  );
}



{/* <div className="w-1/3 border-r text-on-surface border-gray-300">
<textarea
className="w-full h-full p-2 resize-none"
value={value}
onChange={e => setValue(e.target.value)}
/>
</div> */}