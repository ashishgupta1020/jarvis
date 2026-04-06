import { type Reminder, categoryEmoji } from "@/lib/mock-data/reminders";
import { cn } from "@/lib/utils";

function getDaysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

function formatCountdown(days: number): { label: string; color: string } {
  if (days < 0) return { label: "Past", color: "text-muted-foreground" };
  if (days === 0) return { label: "Today!", color: "text-[#F87171]" };
  if (days === 1) return { label: "Tomorrow", color: "text-[#FBBF24]" };
  if (days <= 3) return { label: `In ${days} days`, color: "text-[#FBBF24]" };
  return {
    label: new Date(new Date().getTime() + days * 86400000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    color: "text-muted-foreground",
  };
}

const PERSON_DOT: Record<string, string> = {
  his: "bg-[#60A5FA]",
  hers: "bg-[#F472B6]",
  shared: "bg-primary",
};

export function ReminderCard({ reminder }: { reminder: Reminder }) {
  const days = getDaysUntil(reminder.date);
  const { label, color } = formatCountdown(days);

  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
      {/* Emoji */}
      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-base shrink-0">
        {categoryEmoji[reminder.category]}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">{reminder.title}</p>
        {reminder.note && (
          <p className="text-[11px] text-muted-foreground truncate mt-0.5">{reminder.note}</p>
        )}
      </div>

      {/* Right: countdown + person dot */}
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className={cn("text-xs font-medium", color)}>{label}</span>
        <div className={cn("w-2 h-2 rounded-full", PERSON_DOT[reminder.person])} />
      </div>
    </div>
  );
}
