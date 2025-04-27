import { useEffect, useState } from "react";

export const useSimulateVitals = (isSimulating) => {
  const [vitals, setVitals] = useState({
    heartbeat: 72,
    temperature: 36.5,
    spo2: 98,
  });

  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setVitals({
        heartbeat: Math.floor(Math.random() * (130 - 50) + 50),
        temperature: parseFloat((Math.random() * (40 - 35) + 35).toFixed(1)),
        spo2: Math.floor(Math.random() * (100 - 85) + 85),
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isSimulating]);

  return vitals;
};
