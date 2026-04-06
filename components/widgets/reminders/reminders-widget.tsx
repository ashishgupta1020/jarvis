"use client";

import { reminders } from "@/lib/mock-data/reminders";
import { usePersonStore } from "@/lib/store/use-person-store";
import { ReminderCard } from "./reminder-card";

export function RemindersWidget() {
  const { person } = usePersonStore();

  const filtered = reminders
    .filter((r) => {
      if (person === "both") return true;
      return r.person === "shared" || r.person === person;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4);

  return (
    <div className="rounded-2xl bg-card border border-border p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Upcoming
        </p>
        <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
          {filtered.length}
        </span>
      </div>

      <div className="flex-1">
        {filtered.map((reminder) => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}
      </div>
    </div>
  );
}
