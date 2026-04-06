export type NewsCategory =
  | "tech"
  | "world"
  | "business"
  | "science"
  | "health"
  | "sports"
  | "culture";

export interface NewsItem {
  id: string;
  headline: string;
  source: string;
  sourceInitial: string;
  category: NewsCategory;
  hoursAgo: number;
  url: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    headline: "AI assistants are transforming how households manage daily routines",
    source: "The Verge",
    sourceInitial: "TV",
    category: "tech",
    hoursAgo: 1,
    url: "#",
  },
  {
    id: "n2",
    headline: "Federal Reserve signals cautious approach to rate cuts amid strong jobs data",
    source: "WSJ",
    sourceInitial: "W",
    category: "business",
    hoursAgo: 2,
    url: "#",
  },
  {
    id: "n3",
    headline: "New climate study finds urban green spaces reduce heat by up to 10°F",
    source: "Nature",
    sourceInitial: "N",
    category: "science",
    hoursAgo: 3,
    url: "#",
  },
  {
    id: "n4",
    headline: "Warriors clinch playoff spot with dramatic comeback in final minute",
    source: "ESPN",
    sourceInitial: "E",
    category: "sports",
    hoursAgo: 4,
    url: "#",
  },
  {
    id: "n5",
    headline: "Sleep researchers discover the surprising link between diet and deep sleep",
    source: "NYT",
    sourceInitial: "N",
    category: "health",
    hoursAgo: 5,
    url: "#",
  },
  {
    id: "n6",
    headline: "SpaceX successfully completes first crewed mission to lunar orbit",
    source: "Ars Technica",
    sourceInitial: "A",
    category: "science",
    hoursAgo: 6,
    url: "#",
  },
  {
    id: "n7",
    headline: "Iconic San Francisco diner closes after 60 years, citing rising costs",
    source: "SFGate",
    sourceInitial: "S",
    category: "culture",
    hoursAgo: 8,
    url: "#",
  },
];

export const categoryColors: Record<NewsCategory, string> = {
  tech: "text-violet-400 bg-violet-400/10",
  world: "text-blue-400 bg-blue-400/10",
  business: "text-amber-400 bg-amber-400/10",
  science: "text-cyan-400 bg-cyan-400/10",
  health: "text-green-400 bg-green-400/10",
  sports: "text-orange-400 bg-orange-400/10",
  culture: "text-pink-400 bg-pink-400/10",
};
