import { AppShell } from "@/components/layout/app-shell";
import { NewsWidget } from "@/components/widgets/news/news-widget";

export default function NewsPage() {
  return (
    <AppShell>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">News</h1>
        <NewsWidget />
      </div>
    </AppShell>
  );
}
