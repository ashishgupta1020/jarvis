import { AppShell } from "@/components/layout/app-shell";
import { BillsWidget } from "@/components/widgets/bills/bills-widget";

export default function BillsPage() {
  return (
    <AppShell>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">Bills</h1>
        <BillsWidget />
      </div>
    </AppShell>
  );
}
