"use client";

import { useBillsStore } from "@/lib/store/use-bills-store";
import { BillLineItem } from "./bill-line-item";
import { BillsCalendarBar } from "./bills-calendar-bar";

export function BillsWidget() {
  const { bills } = useBillsStore();

  const totalDue = bills
    .filter((b) => b.status !== "paid")
    .reduce((s, b) => s + b.amount, 0);

  const totalPaid = bills
    .filter((b) => b.status === "paid")
    .reduce((s, b) => s + b.amount, 0);

  const totalAll = totalDue + totalPaid;
  const paidPct = totalAll > 0 ? (totalPaid / totalAll) * 100 : 0;

  const urgentBills = bills
    .filter((b) => b.status !== "paid")
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 4);

  return (
    <div className="rounded-2xl bg-card border border-border p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Bills — April
          </p>
          <p className="text-2xl font-bold mt-1 font-mono tracking-tight">
            ${totalDue.toLocaleString()}
            <span className="text-sm font-normal text-muted-foreground ml-1">due</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Paid</p>
          <p className="text-sm font-semibold font-mono text-[#4ADE80]">
            ${totalPaid.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className="h-full rounded-full bg-[#4ADE80] transition-all duration-500"
            style={{ width: `${paidPct}%` }}
          />
        </div>
        <BillsCalendarBar bills={bills} />
      </div>

      {/* Bill list */}
      <div className="mt-4 flex-1">
        {urgentBills.map((bill) => (
          <BillLineItem key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
}
