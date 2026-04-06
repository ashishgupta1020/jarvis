"use client";

import { useTime } from "@/lib/hooks/use-time";
import { usePersonStore } from "@/lib/store/use-person-store";

function getGreeting(hour: number): string {
  if (hour < 5) return "Good night";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

function getName(person: string): string {
  if (person === "his") return "Shayna";
  if (person === "hers") return "Shayna";
  return "you two";
}

export function DayGreeting() {
  const now = useTime();
  const { person } = usePersonStore();
  const greeting = getGreeting(now.getHours());
  const name = getName(person);

  return (
    <span className="text-sm font-medium text-muted-foreground">
      {greeting},{" "}
      <span className="text-foreground">{name}</span>
    </span>
  );
}
