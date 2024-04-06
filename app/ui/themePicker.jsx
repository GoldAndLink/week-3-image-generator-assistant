import React from 'react';

const ThemeOption = ({ themeName, isSelected, onClick, imageUrl }) => (
    <div
        className={`rounded-xl  text-white shadow-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:animate-background md:shadow-xl md:transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ${isSelected ? `ring-4 ring-${themeName.color} shadow-cyan-300/50 scale-[1.1]` : "ring-2 ring-transparent hover:shadow-cyan-100/50"}`}

        onClick={() => onClick(themeName.key)}
    >

        <div className="rounded-[10px] p-4 !pt-16 sm:p-6 bg-stone-800">
            <img src={imageUrl} alt={themeName.key} className=" size-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl  font-semibold">{themeName.key}</h3>
        </div>
    </div>
);

const themes = [
    {key: "Landscape", color: "blue-400", query: "landscape"},
    {key: "Space", color: "purple-400", query: "space"},
    {key: "Nature", color: "green-400", query: "nature"},
    {key: "Humanity", color: "orange-400", query: "humanity"}
];

export default function ThemePicker({selectedTheme, handleThemeClick}) {
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
        <div className="grid grid-cols-2 gap-6">
            {themeOptions}
        </div>
    );
}
