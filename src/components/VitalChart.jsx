import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const VitalChart = ({ vitals }) => {
  const { heartbeat, temperature, spo2 } = vitals;
  const [data, setData] = useState([]);

  useEffect(() => {
    // Add a new data point each time vitals change
    const newData = {
      time: new Date().toLocaleTimeString(),
      heartbeat,
      temperature,
      spo2,
    };
    setData((prevData) => [...prevData, newData]);
  }, [heartbeat, temperature, spo2]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Vitals Over Time
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="heartbeat"
            stroke="#ff0000"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#0000ff"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="spo2"
            stroke="#00ff00"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VitalChart;
