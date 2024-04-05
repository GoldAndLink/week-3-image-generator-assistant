"use client"
import { useState } from "react";
import OpenAIAssistant from "@/app/ui/openai-assistant";
import ThemePicker from "@/app/ui/themePicker";
import ImageGenerator from "@/app/ui/imageGenerator";

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [paintingDescription, setPaintingDescription] = useState(null);

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <main>
      <div className="mx-auto mb-12 max-w-lg p-4 text-center">
        <div className="">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-5xl">AI Art Generator</h1>
          <div className="mb-6 text-normal font-normal text-gray-500">
            Pick an option from the selection of painting themes
          </div>
        </div>
        <ThemePicker selectedTheme={selectedTheme} handleThemeClick={handleThemeClick}/>
        <OpenAIAssistant
          assistantId="asst_76Mc2DIexorhqncbWqnbuc2T"
          greeting="I am a helpful chat assistant. How can I help you?"
          messageLimit={10}
          theme={selectedTheme}
          setPaintingDescription={setPaintingDescription}
        />
        <ImageGenerator paintingDescription={paintingDescription} />
      </div>
    </main>
  );
}
