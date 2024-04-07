import React from 'react';
import Image from 'next/image';

interface ThemeOption {
    key: string;
    color: string;
    query: string;
}

interface ThemeOptionProps {
    themeName: ThemeOption;
    isSelected: boolean;
    onClick: (key: string) => void;
    imageUrl: string;
}

const ThemeOption: React.FC<ThemeOptionProps> = ({
                                                     themeName,
                                                     isSelected,
                                                     onClick,
                                                     imageUrl,
                                                 }) => (
    <div
        className={`rounded-xl text-white shadow-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:animate-background md:shadow-xl md:transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ${
            isSelected
                ? `ring-4 ring-${themeName.color} shadow-cyan-300/50 scale-[1.1]`
                : 'ring-2 ring-transparent hover:shadow-cyan-100/50'
        }`}
        onClick={() => onClick(themeName.key)}
    >
        <div className="rounded-[10px] p-4 !pt-12 sm:p-6 bg-stone-800">
            <Image
                src={imageUrl}
                alt={themeName.key}
                width={200}
                height={200}
                className="size-42 object-cover items-center justify-center rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{themeName.key}</h3>
        </div>
    </div>
);

const themes: ThemeOption[] = [
    { key: 'Landscape', color: 'blue-400', query: 'landscape' },
    { key: 'Space', color: 'purple-400', query: 'space' },
    { key: 'Nature', color: 'green-400', query: 'nature' },
    { key: 'Humanity', color: 'orange-400', query: 'humanity' },
];

interface ThemePickerProps {
    selectedTheme: string;
    handleThemeClick: (key: string) => void;
}

const ThemePicker: React.FC<ThemePickerProps> = ({ selectedTheme, handleThemeClick }) => {
    const themeOptions = themes.map((theme) => (
        <ThemeOption
            key={theme.key}
            themeName={theme}
            isSelected={selectedTheme === theme.key}
            onClick={handleThemeClick}
            imageUrl={`https://source.unsplash.com/random/400x300?${theme.query}`}
        />
    ));

    return <div className="grid grid-cols-2 gap-6">{themeOptions}</div>;
};

export default ThemePicker;
