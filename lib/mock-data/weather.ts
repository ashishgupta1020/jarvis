export type WeatherCondition =
  | "sunny"
  | "partly-cloudy"
  | "cloudy"
  | "rainy"
  | "stormy"
  | "snowy"
  | "foggy"
  | "windy";

export interface ForecastDay {
  day: string;
  condition: WeatherCondition;
  high: number;
  low: number;
}

export interface WeatherData {
  city: string;
  temperature: number;
  feelsLike: number;
  condition: WeatherCondition;
  conditionText: string;
  humidity: number;
  wind: number;
  forecast: ForecastDay[];
}

export const weatherData: WeatherData = {
  city: "San Francisco",
  temperature: 68,
  feelsLike: 65,
  condition: "partly-cloudy",
  conditionText: "Partly Cloudy",
  humidity: 72,
  wind: 12,
  forecast: [
    { day: "Mon", condition: "sunny", high: 72, low: 58 },
    { day: "Tue", condition: "partly-cloudy", high: 69, low: 56 },
    { day: "Wed", condition: "cloudy", high: 64, low: 54 },
    { day: "Thu", condition: "rainy", high: 60, low: 52 },
    { day: "Fri", condition: "sunny", high: 74, low: 59 },
  ],
};

export const conditionEmoji: Record<WeatherCondition, string> = {
  sunny: "☀️",
  "partly-cloudy": "⛅",
  cloudy: "☁️",
  rainy: "🌧️",
  stormy: "⛈️",
  snowy: "❄️",
  foggy: "🌫️",
  windy: "💨",
};
