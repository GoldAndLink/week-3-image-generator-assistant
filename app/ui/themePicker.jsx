import React from 'react';

const ThemeOption = ({ themeName, isSelected, onClick, imageUrl }) => (
    <div
        className={`rounded-lg  shadow-lg bg-white p-4 cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 ${isSelected ? `ring-4 ring-${themeName.color}` : "ring-2 ring-transparent"} ${isSelected ? "shadow-cyan-300/50" : "hover:shadow-cyan-100/50"}`}
        onClick={() => onClick(themeName.key)}
    >
        <img src={imageUrl} alt={themeName.key} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl text-slate-900 font-semibold">{themeName.key}</h3>
    </div>
);

const themes = [
    { key: "Landscape", color: "blue-400", query: "landscape" },
    { key: "Space", color: "purple-400", query: "space" },
    { key: "Nature", color: "green-400", query: "nature" },
    { key: "Humanity", color: "orange-400", query: "humanity" }
];

export default function ThemePicker({ selectedTheme, handleThemeClick }) {
    const themeOptions = themes.map(theme => (
        <ThemeOption
            key={theme.key}
            themeName={theme}
            isSelected={selectedTheme === theme.key}
            onClick={handleThemeClick}
            imageUrl={`https://source.unsplash.com/random/400x300?${theme.query}`}
        />
    ));

    return (
        <div className="grid grid-cols-2 gap-4">
            {themeOptions}
        </div>
    );
}
