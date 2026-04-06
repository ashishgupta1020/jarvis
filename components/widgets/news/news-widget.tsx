import { newsItems } from "@/lib/mock-data/news";
import { NewsCard } from "./news-card";

export function NewsWidget() {
  return (
    <div className="rounded-2xl bg-card border border-border p-5">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
        News
      </p>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
