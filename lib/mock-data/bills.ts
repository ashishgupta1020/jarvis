export type BillStatus = "paid" | "due-soon" | "overdue" | "upcoming";
export type BillCategory =
  | "utilities"
  | "rent"
  | "subscription"
  | "insurance"
  | "internet"
  | "phone"
  | "other";

export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDay: number; // day of month
  dueDate: string; // ISO date string for mock
  status: BillStatus;
  category: BillCategory;
  autopay: boolean;
}

export const bills: Bill[] = [
  {
    id: "1",
    name: "Rent",
    amount: 2850,
    dueDay: 1,
    dueDate: "2026-04-01",
    status: "paid",
    category: "rent",
    autopay: false,
  },
  {
    id: "2",
    name: "PG&E",
    amount: 124,
    dueDay: 8,
    dueDate: "2026-04-08",
    status: "due-soon",
    category: "utilities",
    autopay: true,
  },
  {
    id: "3",
    name: "Internet",
    amount: 79,
    dueDay: 10,
    dueDate: "2026-04-10",
    status: "due-soon",
    category: "internet",
    autopay: true,
  },
  {
    id: "4",
    name: "Renter's Insurance",
    amount: 22,
    dueDay: 15,
    dueDate: "2026-04-15",
    status: "upcoming",
    category: "insurance",
    autopay: true,
  },
  {
    id: "5",
    name: "Phone Plan",
    amount: 96,
    dueDay: 18,
    dueDate: "2026-04-18",
    status: "upcoming",
    category: "phone",
    autopay: false,
  },
  {
    id: "6",
    name: "Netflix",
    amount: 22.99,
    dueDay: 22,
    dueDate: "2026-04-22",
    status: "upcoming",
    category: "subscription",
    autopay: true,
  },
  {
    id: "7",
    name: "Spotify",
    amount: 16.99,
    dueDay: 24,
    dueDate: "2026-04-24",
    status: "upcoming",
    category: "subscription",
    autopay: true,
  },
];

export const totalDue = bills
  .filter((b) => b.status !== "paid")
  .reduce((sum, b) => sum + b.amount, 0);

export const totalPaid = bills
  .filter((b) => b.status === "paid")
  .reduce((sum, b) => sum + b.amount, 0);
