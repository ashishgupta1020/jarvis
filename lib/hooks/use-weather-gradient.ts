"use client";

import { useMemo } from "react";

interface GradientConfig {
  gradient: string;
  textColor: string;
  label: string;
}

export function useWeatherGradient(hour?: number): GradientConfig {
  const h = hour ?? new Date().getHours();

  return useMemo(() => {
    if (h >= 5 && h < 8) {
      return {
        gradient: "linear-gradient(135deg, #FF9A8B 0%, #FF6A88 40%, #A855F7 100%)",
        textColor: "#fff",
        label: "dawn",
      };
    }
    if (h >= 8 && h < 12) {
      return {
        gradient: "linear-gradient(135deg, #74B9FF 0%, #0984E3 60%, #6C5CE7 100%)",
        textColor: "#fff",
        label: "morning",
      };
    }
    if (h >= 12 && h < 17) {
      return {
        gradient: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #0369A1 100%)",
        textColor: "#fff",
        label: "afternoon",
      };
    }
    if (h >= 17 && h < 20) {
      return {
        gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 40%, #7C3AED 100%)",
        textColor: "#fff",
        label: "dusk",
      };
    }
    return {
      gradient: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 60%, #0C0C0E 100%)",
      textColor: "#fff",
      label: "night",
    };
  }, [h]);
}
