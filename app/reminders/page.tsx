import { AppShell } from "@/components/layout/app-shell";
import { RemindersWidget } from "@/components/widgets/reminders/reminders-widget";

export default function RemindersPage() {
  return (
    <AppShell>
      <div className="max-w-xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">Reminders</h1>
        <RemindersWidget />
      </div>
    </AppShell>
  );
}
