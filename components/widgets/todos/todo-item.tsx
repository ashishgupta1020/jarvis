"use client";

import { motion } from "framer-motion";
import { type Todo } from "@/lib/mock-data/todos";
import { useTodosStore } from "@/lib/store/use-todos-store";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const PRIORITY_DOT: Record<string, string> = {
  high: "bg-[#F87171]",
  medium: "bg-[#FBBF24]",
  low: "bg-muted-foreground/30",
};

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo } = useTodosStore();

  const isOverdue =
    todo.dueDate && !todo.completed && new Date(todo.dueDate) < new Date();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -16, transition: { duration: 0.15 } }}
      className="flex items-start gap-2.5 py-2"
    >
      {/* Checkbox */}
      <button
        onClick={() => toggleTodo(todo.id)}
        className={cn(
          "mt-0.5 w-4.5 h-4.5 rounded-full border shrink-0 flex items-center justify-center",
          "transition-all duration-200",
          todo.completed
            ? "bg-primary border-primary"
            : "border-border hover:border-primary/70"
        )}
        style={{ width: 18, height: 18 }}
      >
        {todo.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <Check size={10} strokeWidth={3} className="text-primary-foreground" />
          </motion.div>
        )}
      </button>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm leading-snug",
            todo.completed
              ? "line-through text-muted-foreground"
              : "text-foreground"
          )}
        >
          {todo.text}
        </p>
        {todo.dueDate && !todo.completed && (
          <p
            className={cn(
              "text-[10px] mt-0.5",
              isOverdue ? "text-[#F87171]" : "text-muted-foreground"
            )}
          >
            {isOverdue ? "Overdue · " : ""}
            {new Date(todo.dueDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </p>
        )}
      </div>

      {/* Priority dot */}
      <div
        className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", PRIORITY_DOT[todo.priority])}
      />
    </motion.div>
  );
}
