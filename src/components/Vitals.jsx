const Vitals = ({ vitals }) => {
  const { heartbeat, temperature, spo2 } = vitals;

  const vitalStyle =
    "flex flex-col items-center p-4 rounded shadow bg-gray-100 dark:bg-gray-700";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
      <div className={vitalStyle}>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
          Heartbeat
        </h2>
        <p className="text-3xl font-bold text-red-500">{heartbeat} bpm</p>
      </div>
      <div className={vitalStyle}>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
          Temperature
        </h2>
        <p className="text-3xl font-bold text-blue-500">{temperature} °C</p>
      </div>
      <div className={vitalStyle}>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
          SpO₂
        </h2>
        <p className="text-3xl font-bold text-green-500">{spo2} %</p>
      </div>
    </div>
  );
};

export default Vitals;