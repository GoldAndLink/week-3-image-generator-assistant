export default function ThemePicker({ selectedTheme, handleThemeClick }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div 
        className={`rounded-lg shadow-md bg-white p-4 cursor-pointer ${selectedTheme === "Landscape" ? "ring-2 ring-blue-400" : ""}`}
        onClick={() => handleThemeClick("Landscape")}
      >
        <img src="https://source.unsplash.com/random/400x300?landscape" alt="Landscape" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl text-slate-900 font-semibold">Landscape</h3>
      </div>
      <div 
        className={`rounded-lg shadow-md bg-white p-4 cursor-pointer ${selectedTheme === "Space" ? "ring-2 ring-purple-400" : ""}`}
        onClick={() => handleThemeClick("Space")}
      >
        <img src="https://source.unsplash.com/random/400x300?space" alt="Space" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl text-slate-900 font-semibold">Space</h3>
      </div>
      <div 
        className={`rounded-lg shadow-md bg-white p-4 cursor-pointer ${selectedTheme === "Nature" ? "ring-2 ring-green-400" : ""}`}
        onClick={() => handleThemeClick("Nature")}
      >
        <img src="https://source.unsplash.com/random/400x300?nature" alt="Nature" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl text-slate-900 font-semibold">Nature</h3>
      </div>
      <div 
        className={`rounded-lg shadow-md bg-white p-4 cursor-pointer ${selectedTheme === "Humanity" ? "ring-2 ring-orange-400" : ""}`}
        onClick={() => handleThemeClick("Humanity")}
      >
        <img src="https://source.unsplash.com/random/400x300?humanity" alt="Humanity" className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl text-slate-900 font-semibold">Humanity</h3>
      </div>
    </div>
  );
}
