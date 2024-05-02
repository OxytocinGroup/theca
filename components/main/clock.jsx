"use client";

import { useEffect, useState } from "react";

const clock = () => {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const timeOptions = { hour: "numeric", minute: "numeric" };
  const dateOptions = { day: "2-digit", month: "long", year: "numeric" };
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-text-secondary">
        {localTime.toLocaleDateString(undefined, dateOptions)}
      </h2>
      <h1 className="text-text-primary">
        {localTime.toLocaleTimeString(undefined, timeOptions)}
      </h1>
    </div>
  );
};

export default clock;
