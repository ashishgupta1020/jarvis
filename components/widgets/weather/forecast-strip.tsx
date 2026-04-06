import { conditionEmoji, type ForecastDay } from "@/lib/mock-data/weather";

export function ForecastStrip({ forecast }: { forecast: ForecastDay[] }) {
  return (
    <div className="flex items-center gap-2 mt-4">
      {forecast.map((day) => (
        <div
          key={day.day}
          className="flex-1 flex flex-col items-center gap-1 rounded-xl py-2 px-1"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <span className="text-[10px] font-medium uppercase tracking-widest opacity-70">
            {day.day}
          </span>
          <span className="text-base">{conditionEmoji[day.condition]}</span>
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold">{day.high}°</span>
            <span className="text-[10px] opacity-60">{day.low}°</span>
          </div>
        </div>
      ))}
    </div>
  );
}
