// CardData.ts
export type CardData = {
  id: string;
  url: string;
  img: string | null;
  desc: string;
  type: "algorithm" | "data-structure" | "concept";
  unlocked: boolean;

};


export const Cards: CardData[] = [
  { id: "1", url: "/data-structures/linked-lists", img: "./linked-list-card.png", desc: "Understand Linked Lists", type: "data-structure", unlocked: true },
  { id: "2", url: "/data-structures/trees", img: "", desc: "Introduction to Trees", type: "data-structure", unlocked: false },
  { id: "3", url: "/algorithms/binary-search", img: "", desc: "Binary Search Explained", type: "algorithm", unlocked: false },
  { id: "4", url: "/algorithms/sliding-window", img: "", desc: "Sliding Window Technique", type: "algorithm", unlocked: false },
  { id: "5", url: "/algorithms/graph-algorithms", img: "", desc: "Graph Algorithms Overview", type: "algorithm", unlocked: false },
  { id: "6", url: "/algorithms/recursion", img: "", desc: "Mastering Recursion", type: "algorithm", unlocked: false },
  { id: "7", url: "/concepts/rbac", img: "", desc: "Role-Based Access Control", type: "concept", unlocked: false },
  { id: "8", url: "/concepts/configurations", img: "", desc: "Configuration", type: "concept", unlocked: false },
  { id: "9", url: "/concepts/configurations", img: "", desc: "Configuration", type: "concept", unlocked: false },
];