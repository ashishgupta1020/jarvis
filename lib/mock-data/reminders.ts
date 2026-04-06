export type ReminderCategory =
  | "birthday"
  | "anniversary"
  | "appointment"
  | "event"
  | "errand"
  | "bill"
  | "travel";

export type ReminderPerson = "his" | "hers" | "shared";

export interface Reminder {
  id: string;
  title: string;
  date: string; // ISO date string
  category: ReminderCategory;
  person: ReminderPerson;
  note?: string;
}

export const reminders: Reminder[] = [
  {
    id: "r1",
    title: "Dad's Birthday",
    date: "2026-04-09",
    category: "birthday",
    person: "his",
    note: "Call him in the morning",
  },
  {
    id: "r2",
    title: "Dentist — Dr. Patel",
    date: "2026-04-08",
    category: "appointment",
    person: "hers",
    note: "11:30am, bring insurance card",
  },
  {
    id: "r3",
    title: "Sara & Mike's Wedding",
    date: "2026-04-12",
    category: "event",
    person: "shared",
    note: "Venue: The Clift Hotel, 6pm",
  },
  {
    id: "r4",
    title: "Flight to NYC",
    date: "2026-04-19",
    category: "travel",
    person: "shared",
    note: "United 1284, departs 7:45am",
  },
  {
    id: "r5",
    title: "Mom's Anniversary",
    date: "2026-04-22",
    category: "anniversary",
    person: "his",
  },
  {
    id: "r6",
    title: "Annual Physical",
    date: "2026-04-28",
    category: "appointment",
    person: "his",
    note: "9am, fasting required",
  },
];

export const categoryEmoji: Record<ReminderCategory, string> = {
  birthday: "🎂",
  anniversary: "💍",
  appointment: "🏥",
  event: "🎉",
  errand: "📦",
  bill: "💳",
  travel: "✈️",
};
