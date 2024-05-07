"use client";

import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

const clock = ({ className }) => {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const timeOptions = { hour: "numeric", minute: "numeric" };
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <p className="text-text-secondary">
        {localTime.toLocaleDateString("en-GB", dateOptions)}
      </p>
      <p className="text-text-primary">
        {localTime.toLocaleTimeString("en-GB", timeOptions)}
      </p>
    </div>
  );
};

export default clock;
