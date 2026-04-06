import { type Bill } from "@/lib/mock-data/bills";
import { cn } from "@/lib/utils";

const STATUS_COLOR: Record<string, string> = {
  paid: "bg-[#4ADE80]",
  "due-soon": "bg-[#FBBF24]",
  overdue: "bg-[#F87171]",
  upcoming: "bg-muted-foreground/30",
};

export function BillsCalendarBar({ bills }: { bills: Bill[] }) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const billsByDay = new Map(bills.map((b) => [b.dueDay, b]));

  return (
    <div className="flex items-end gap-0.5 h-6 mt-1">
      {days.map((day) => {
        const bill = billsByDay.get(day);
        return (
          <div
            key={day}
            title={bill ? `${bill.name} — $${bill.amount}` : undefined}
            className={cn(
              "flex-1 rounded-sm transition-all",
              bill ? cn("h-4", STATUS_COLOR[bill.status]) : "h-1.5 bg-border"
            )}
          />
        );
      })}
    </div>
  );
}
