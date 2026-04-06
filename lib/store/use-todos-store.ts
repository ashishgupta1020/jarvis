"use client";

import { create } from "zustand";
import { initialTodos, type Todo, type TodoPerson } from "@/lib/mock-data/todos";

interface TodosStore {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  addTodo: (text: string, person: TodoPerson) => void;
  deleteTodo: (id: string) => void;
}

export const useTodosStore = create<TodosStore>((set) => ({
  todos: initialTodos,
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
  addTodo: (text, person) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          text,
          completed: false,
          person,
          priority: "medium" as const,
        },
      ],
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));
