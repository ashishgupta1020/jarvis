"use client";

import { usePersonStore, type PersonFilter } from "@/lib/store/use-person-store";
import { cn } from "@/lib/utils";

const options: { label: string; value: PersonFilter }[] = [
  { label: "His", value: "his" },
  { label: "Both", value: "both" },
  { label: "Hers", value: "hers" },
];

export function PersonToggle() {
  const { person, setPerson } = usePersonStore();

  return (
    <div className="flex items-center gap-0.5 rounded-full bg-muted p-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setPerson(opt.value)}
          className={cn(
            "px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
            person === opt.value
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
