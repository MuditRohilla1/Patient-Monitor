import { useTheme } from "../contexts/ThemeContext";

const Navbar = ({ setIsSimulating, isSimulating }) => {
  const { theme, toggleTheme } = useTheme();

  const handleSimulate = () => {
    setIsSimulating(!isSimulating);
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-700 dark:text-gray-100">
        Patient Monitor
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={handleSimulate}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isSimulating ? "Stop" : "Simulate"}
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white p-2 rounded"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;