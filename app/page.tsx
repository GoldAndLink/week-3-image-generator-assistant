"use client"
import { useState } from "react";
import OpenAIAssistant from "@/app/ui/openai-assistant";
import ThemePicker from "@/app/ui/themePicker";
import ImageGenerator from "@/app/ui/imageGenerator";

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [paintingDescription, setPaintingDescription] = useState<string | null>(null);
  const [showImageGenerator, setShowImageGenerator] = useState(false);

  const handleThemeClick = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <div className="mx-auto mb-12 max-w-lg p-4 text-center flex-grow">
        <div>
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-5xl">
            AI Art Generator  🎨
          </h1>
          <div className="mb-6 text-normal font-normal text-gray-500">
            Pick an option from the selection of painting themes
          </div>
        </div>
        {!showImageGenerator ? (
          <ThemePicker selectedTheme={selectedTheme} handleThemeClick={handleThemeClick} />
        ) : (
          <ImageGenerator paintingDescription={paintingDescription} />
        )}
      </div>
      <div className="mt-auto w-2/5 mx-auto">
        <OpenAIAssistant
          assistantId="asst_76Mc2DIexorhqncbWqnbuc2T"
          greeting="I am a helpful chat assistant. How can I help you?"
          messageLimit={10}
          theme={selectedTheme}
          setPaintingDescription={(description) => {
            setPaintingDescription(description);
            setShowImageGenerator(true);
          }}
        />
      </div>
    </main>
  );
}
