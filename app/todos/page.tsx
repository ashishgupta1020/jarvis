import { AppShell } from "@/components/layout/app-shell";
import { TodosWidget } from "@/components/widgets/todos/todos-widget";

export default function TodosPage() {
  return (
    <AppShell>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">Todos</h1>
        <TodosWidget />
      </div>
    </AppShell>
  );
}
