"use client";

import { useTime } from "@/lib/hooks/use-time";

export function TimeDisplay() {
  const now = useTime();

  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const [timeStr, period] = time.split(" ");

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-xl font-semibold tracking-tight text-foreground leading-none">
          {timeStr}
        </span>
        <span className="text-xs font-medium text-muted-foreground">{period}</span>
      </div>
      <span className="text-xs text-muted-foreground mt-0.5">{date}</span>
    </div>
  );
}
