"use client";
import { useState } from "react";

interface CircularProgressProps {
  searches: number;
  traffic: number;
  maxValue: number;
}

const CircularProgress = ({
  searches,
  traffic,
  maxValue,
}: CircularProgressProps) => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const calculatePercentage = (value: number) => (value / maxValue) * 100;

  const searchesPercentage = calculatePercentage(searches);
  const trafficPercentage = calculatePercentage(traffic);

  // SVG parameters
  const size = 200;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const searchesOffset =
    circumference - (circumference * searchesPercentage) / 100;
  const trafficOffset =
    circumference - (circumference * trafficPercentage) / 100;

  return (
    <div className="relative w-[200px] h-[200px]">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circles */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f0f0f0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth - 4}
          stroke="#f0f0f0"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress circles */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#007d88"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={searchesOffset}
          strokeLinecap="round"
          onMouseEnter={() =>
            setHoveredValue(`${searchesPercentage.toFixed(1)}%`)
          }
          onMouseLeave={() => setHoveredValue(null)}
          className="transition-all duration-300 cursor-pointer"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth - 4}
          stroke="#6bb4ba"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={trafficOffset}
          strokeLinecap="round"
          onMouseEnter={() =>
            setHoveredValue(`${trafficPercentage.toFixed(1)}%`)
          }
          onMouseLeave={() => setHoveredValue(null)}
          className="transition-all duration-300 cursor-pointer"
        />
      </svg>

      {/* Percentage display in center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold">
        {hoveredValue || ""}
      </div>
    </div>
  );
};

export default CircularProgress;
