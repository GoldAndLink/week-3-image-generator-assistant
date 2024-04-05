export default function ThemePicker({ selectedTheme, handleThemeClick }) {
  return (
    <div className="flex justify-center space-x-4">
      <button
        className={`px-6 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 ${
          selectedTheme === "Landscape" ? "bg-blue-600 focus:ring-blue-400" : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
        }`}
        onClick={() => handleThemeClick("Landscape")}
      >
        Landscape
      </button>
      <button
        className={`px-6 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 ${
          selectedTheme === "Space" ? "bg-purple-600 focus:ring-purple-400" : "bg-purple-500 hover:bg-purple-600 focus:ring-purple-400"
        }`}
        onClick={() => handleThemeClick("Space")}
      >
        Space
      </button>
      <button
        className={`px-6 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 ${
          selectedTheme === "Nature" ? "bg-green-600 focus:ring-green-400" : "bg-green-500 hover:bg-green-600 focus:ring-green-400"
        }`}
        onClick={() => handleThemeClick("Nature")}
      >
        Nature
      </button>
      <button
        className={`px-6 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 ${
          selectedTheme === "Humanity" ? "bg-orange-600 focus:ring-orange-400" : "bg-orange-500 hover:bg-orange-600 focus:ring-orange-400"
        }`}
        onClick={() => handleThemeClick("Humanity")}
      >
        Humanity
      </button>
    </div>
  );
}
