// CardData.ts
export type CardData = {
  id: string;
  url: string;
  img: string | null;
  desc: string;
  type: "algorithm" | "data-structure" | "concept"

};


export const Cards: CardData[] = [
  { id: "1", url: "/data-structures/linked-lists", img: "", desc: "Understand Linked Lists", type: "data-structure" },
  { id: "2", url: "/data-structures/trees", img: "", desc: "Introduction to Trees", type: "data-structure" },
  { id: "3", url: "/algorithms/binary-search", img: "", desc: "Binary Search Explained", type: "algorithm" },
  { id: "4", url: "/algorithms/sliding-window", img: "", desc: "Sliding Window Technique", type: "algorithm" },
  { id: "5", url: "/algorithms/graph-algorithms", img: "", desc: "Graph Algorithms Overview", type: "algorithm" },
  { id: "6", url: "/algorithms/recursion", img: "", desc: "Mastering Recursion", type: "algorithm" },
  { id: "7", url: "/concepts/rbac", img: "", desc: "Role-Based Access Control", type: "concept" },
  { id: "8", url: "/concepts/configurations", img: "", desc: "Configuration", type: "concept" },
];