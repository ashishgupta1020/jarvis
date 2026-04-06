import { AppShell } from "@/components/layout/app-shell";
import { WeatherWidget } from "@/components/widgets/weather/weather-widget";
import { BillsWidget } from "@/components/widgets/bills/bills-widget";
import { RemindersWidget } from "@/components/widgets/reminders/reminders-widget";
import { TodosWidget } from "@/components/widgets/todos/todos-widget";
import { NewsWidget } from "@/components/widgets/news/news-widget";

export default function Home() {
  return (
    <AppShell>
      <div className="flex flex-col gap-4 max-w-[1400px] mx-auto">
        {/* Top row: Weather + Bills + Reminders */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5">
            <WeatherWidget />
          </div>
          <div className="col-span-4">
            <BillsWidget />
          </div>
          <div className="col-span-3">
            <RemindersWidget />
          </div>
        </div>

        {/* Todos */}
        <TodosWidget />

        {/* News */}
        <NewsWidget />
      </div>
    </AppShell>
  );
}
