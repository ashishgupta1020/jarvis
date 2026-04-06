export type TodoPerson = "his" | "hers" | "shared";
export type TodoPriority = "low" | "medium" | "high";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  person: TodoPerson;
  priority: TodoPriority;
  dueDate?: string;
}

export const initialTodos: Todo[] = [
  // Shared
  { id: "s1", text: "Book dinner reservation", completed: false, person: "shared", priority: "medium", dueDate: "2026-04-07" },
  { id: "s2", text: "Renew car registration", completed: false, person: "shared", priority: "high", dueDate: "2026-04-15" },
  { id: "s3", text: "Plan weekend getaway", completed: false, person: "shared", priority: "low" },
  { id: "s4", text: "Buy anniversary gift", completed: false, person: "shared", priority: "high", dueDate: "2026-04-20" },
  { id: "s5", text: "Schedule HVAC maintenance", completed: true, person: "shared", priority: "medium" },

  // His
  { id: "h1", text: "Pick up dry cleaning", completed: false, person: "his", priority: "medium", dueDate: "2026-04-07" },
  { id: "h2", text: "Call insurance about claim", completed: false, person: "his", priority: "high" },
  { id: "h3", text: "Gym — leg day", completed: true, person: "his", priority: "low" },
  { id: "h4", text: "Oil change for the car", completed: false, person: "his", priority: "medium", dueDate: "2026-04-10" },

  // Hers
  { id: "e1", text: "Schedule dentist appointment", completed: false, person: "hers", priority: "high", dueDate: "2026-04-08" },
  { id: "e2", text: "Pick up prescription", completed: false, person: "hers", priority: "high", dueDate: "2026-04-06" },
  { id: "e3", text: "Return Amazon package", completed: true, person: "hers", priority: "low" },
  { id: "e4", text: "Coffee with Sarah", completed: false, person: "hers", priority: "low", dueDate: "2026-04-09" },
];
