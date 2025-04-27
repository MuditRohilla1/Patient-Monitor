import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Vitals from "./components/Vitals";
import AlertDialog from "./components/AlertDialog";
import { useSimulateVitals } from "./hooks/useSimulateVitals";
import { useState, useEffect } from "react";
import VitalChart from "./components/VitalChart";

function App() {
  const [isSimulating, setIsSimulating] = useState(false);
  const vitals = useSimulateVitals(isSimulating);

  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (vitals.heartbeat > 120) {
      setAlert({ vitalName: "Heartbeat", value: vitals.heartbeat });
    } else if (vitals.spo2 < 90) {
      setAlert({ vitalName: "SpO₂", value: vitals.spo2 });
    } else if (vitals.temperature > 39) {
      setAlert({ vitalName: "Temperature", value: vitals.temperature });
    } else {
      setAlert(null);
    }
  }, [vitals]);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Navbar setIsSimulating={setIsSimulating} isSimulating={isSimulating} />
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
            Patient Vitals Monitor
          </h1>
          <Vitals vitals={vitals} />
          <VitalChart vitals={vitals} />
        </div>
        {alert && (
          <AlertDialog
            vitalName={alert.vitalName}
            value={alert.value}
            onClose={() => setAlert(null)}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
