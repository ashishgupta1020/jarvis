import { type NewsItem, categoryColors } from "@/lib/mock-data/news";
import { cn } from "@/lib/utils";

export function NewsCard({ item }: { item: NewsItem }) {
  const timeLabel =
    item.hoursAgo === 1 ? "1h ago" : `${item.hoursAgo}h ago`;

  return (
    <a
      href={item.url}
      className={cn(
        "flex flex-col gap-3 p-4 rounded-xl bg-card border border-border",
        "hover:border-border/80 hover:bg-elevated transition-all duration-200",
        "shrink-0 w-64"
      )}
      style={{ background: "var(--elevated)" }}
    >
      {/* Source + time */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
            <span className="text-[9px] font-bold text-primary">
              {item.sourceInitial}
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-medium">{item.source}</span>
        </div>
        <span className="text-[10px] text-muted-foreground">{timeLabel}</span>
      </div>

      {/* Headline */}
      <p className="text-sm font-medium text-foreground leading-snug line-clamp-3">
        {item.headline}
      </p>

      {/* Category tag */}
      <span
        className={cn(
          "self-start text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full",
          categoryColors[item.category]
        )}
      >
        {item.category}
      </span>
    </a>
  );
}
