export type CardData = {
  id: string;
  url: string;
  img: string | null;
  desc: string;
  type: TopicTypes;
  unlocked: boolean;
};

export type TopicTypes = "algorithm" | "data-structure" | "concept" | "";