"use client";

import { type Bill, type BillStatus } from "@/lib/mock-data/bills";
import { useBillsStore } from "@/lib/store/use-bills-store";
import { cn } from "@/lib/utils";
import { Check, Zap } from "lucide-react";

const STATUS_STYLES: Record<BillStatus, string> = {
  paid: "text-[#4ADE80] bg-[#4ADE80]/10",
  "due-soon": "text-[#FBBF24] bg-[#FBBF24]/10",
  overdue: "text-[#F87171] bg-[#F87171]/10",
  upcoming: "text-muted-foreground bg-muted",
};

const STATUS_LABEL: Record<BillStatus, string> = {
  paid: "Paid",
  "due-soon": "Due soon",
  overdue: "Overdue",
  upcoming: "Upcoming",
};

export function BillLineItem({ bill }: { bill: Bill }) {
  const { togglePaid } = useBillsStore();

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-border last:border-0">
      {/* Paid toggle */}
      <button
        onClick={() => togglePaid(bill.id)}
        className={cn(
          "w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all",
          bill.status === "paid"
            ? "border-[#4ADE80] bg-[#4ADE80]"
            : "border-border hover:border-muted-foreground"
        )}
      >
        {bill.status === "paid" && <Check size={10} strokeWidth={3} className="text-black" />}
      </button>

      {/* Name */}
      <div className="flex-1 min-w-0">
        <p className={cn("text-sm font-medium truncate", bill.status === "paid" && "line-through text-muted-foreground")}>
          {bill.name}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          {bill.autopay && (
            <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
              <Zap size={9} /> Auto
            </span>
          )}
          <span className="text-[10px] text-muted-foreground">
            Due {new Date(bill.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </span>
        </div>
      </div>

      {/* Amount + status */}
      <div className="flex flex-col items-end gap-1">
        <span className="font-mono text-sm font-semibold">
          ${bill.amount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
        </span>
        <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full font-medium", STATUS_STYLES[bill.status])}>
          {STATUS_LABEL[bill.status]}
        </span>
      </div>
    </div>
  );
}
