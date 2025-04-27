import { motion } from "framer-motion";

const shakeAnimation = {
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

// Set the colors based on the vital
const getGlowColor = (vitalName) => {
  if (vitalName.toLowerCase().includes("heart") || vitalName.toLowerCase().includes("ecg")) {
    return "rgba(255, 0, 0, 0.8)"; // RED
  } else if (vitalName.toLowerCase().includes("temp")) {
    return "rgba(0, 120, 255, 0.8)"; // BLUE
  } else if (vitalName.toLowerCase().includes("oxygen") || vitalName.toLowerCase().includes("pressure")) {
    return "rgba(0, 255, 100, 0.8)"; // GREEN
  } else {
    return "rgba(255, 0, 0, 0.8)"; // Default RED
  }
};

const AlertDialog = ({ vitalName, value, onClose }) => {
  const glowColor = getGlowColor(vitalName);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50"
    >
      <motion.div
        variants={shakeAnimation}
        animate="animate"
        className="p-8 rounded-lg text-center shadow-lg border-4"
        style={{
          backgroundColor: glowColor,
          boxShadow: `0 0 20px 5px ${glowColor}, 0 0 50px 10px ${glowColor}`,
          color: "#fff",
        }}
      >
        <h2 className="text-3xl font-bold mb-4 animate-pulse">🚨 CRITICAL VITAL ALERT 🚨</h2>
        <p className="text-xl">Vital: <span className="font-bold">{vitalName}</span></p>
        <p className="text-xl">Value: <span className="font-bold">{value}</span></p>
        <p className="mt-4">Immediate medical attention required!</p>

        <button 
          onClick={onClose}
          className="mt-6 bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition-all"
        >
          Noted
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AlertDialog;
