"use client";

import { useWeatherGradient } from "@/lib/hooks/use-weather-gradient";
import { weatherData, conditionEmoji } from "@/lib/mock-data/weather";
import { ForecastStrip } from "./forecast-strip";
import { Droplets, Wind } from "lucide-react";

export function WeatherWidget() {
  const { gradient, textColor } = useWeatherGradient();

  return (
    <div
      className="rounded-2xl p-6 flex flex-col h-full min-h-[280px]"
      style={{ background: gradient, color: textColor }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium opacity-80 tracking-wide uppercase">
            {weatherData.city}
          </p>
          <p className="text-base font-medium mt-0.5 opacity-90">
            {weatherData.conditionText}
          </p>
        </div>
        <span className="text-4xl">{conditionEmoji[weatherData.condition]}</span>
      </div>

      {/* Temperature */}
      <div className="flex items-end gap-3 mt-4">
        <span
          className="font-bold leading-none"
          style={{ fontSize: "5rem", fontFamily: "var(--font-geist-sans)" }}
        >
          {weatherData.temperature}°
        </span>
        <div className="mb-3 opacity-80">
          <p className="text-sm">Feels {weatherData.feelsLike}°</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mt-2 opacity-80">
        <div className="flex items-center gap-1.5 text-xs">
          <Droplets size={13} />
          <span>{weatherData.humidity}% humidity</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <Wind size={13} />
          <span>{weatherData.wind} mph</span>
        </div>
      </div>

      {/* Forecast */}
      <div className="mt-auto">
        <ForecastStrip forecast={weatherData.forecast} />
      </div>
    </div>
  );
}
