"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useTodosStore } from "@/lib/store/use-todos-store";
import { type TodoPerson } from "@/lib/mock-data/todos";
import { cn } from "@/lib/utils";

export function TodoAddInput({ person }: { person: TodoPerson }) {
  const [value, setValue] = useState("");
  const { addTodo } = useTodosStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    addTodo(trimmed, person);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
      <button
        type="submit"
        className={cn(
          "w-5 h-5 rounded-full border border-dashed border-border",
          "flex items-center justify-center text-muted-foreground",
          "hover:border-primary hover:text-primary transition-colors shrink-0"
        )}
      >
        <Plus size={10} strokeWidth={2.5} />
      </button>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a task..."
        className={cn(
          "flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50",
          "outline-none border-none focus:ring-0"
        )}
      />
    </form>
  );
}
