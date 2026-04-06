import { TimeDisplay } from "@/components/shared/time-display";
import { DayGreeting } from "@/components/shared/day-greeting";
import { PersonToggle } from "@/components/layout/person-toggle";

export function Topbar() {
  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-border bg-background shrink-0">
      <div className="flex items-center gap-5">
        <TimeDisplay />
        <div className="w-px h-6 bg-border" />
        <DayGreeting />
      </div>
      <PersonToggle />
    </header>
  );
}
