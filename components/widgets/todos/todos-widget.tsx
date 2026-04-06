"use client";

import { AnimatePresence } from "framer-motion";
import { useTodosStore } from "@/lib/store/use-todos-store";
import { usePersonStore } from "@/lib/store/use-person-store";
import { TodoItem } from "./todo-item";
import { TodoAddInput } from "./todo-add-input";

export function TodosWidget() {
  const { todos } = useTodosStore();
  const { person } = usePersonStore();

  const sharedTodos = todos.filter((t) => t.person === "shared");
  const personalTodos = todos.filter((t) => {
    if (person === "both") return t.person !== "shared";
    return t.person === person;
  });

  const personalLabel =
    person === "both" ? "Personal" : person === "his" ? "His" : "Hers";

  const sharedActive = sharedTodos.filter((t) => !t.completed);
  const sharedDone = sharedTodos.filter((t) => t.completed);
  const personalActive = personalTodos.filter((t) => !t.completed);
  const personalDone = personalTodos.filter((t) => t.completed);

  return (
    <div className="rounded-2xl bg-card border border-border p-5">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
        Todos
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Shared column */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-sm font-semibold text-foreground">Shared</h3>
            <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
              {sharedActive.length}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {sharedActive.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
            {sharedDone.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </AnimatePresence>

          <TodoAddInput person="shared" />
        </div>

        {/* Personal column */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-sm font-semibold text-foreground">{personalLabel}</h3>
            <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
              {personalActive.length}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {personalActive.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
            {personalDone.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </AnimatePresence>

          <TodoAddInput person={person === "his" ? "his" : "hers"} />
        </div>
      </div>
    </div>
  );
}
