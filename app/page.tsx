"use client"
import { useState } from "react";
import OpenAIAssistant from "@/app/ui/openai-assistant";

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <main>
      <div className="mx-auto mb-12 max-w-lg text-center">
        <div className="m-4">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">AI Art Generator</h1>
          <div className="mb-6 text-normal font-normal text-gray-500">
            Pick an option from the selection of painting themes
          </div>
        </div>
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
        <OpenAIAssistant 
          assistantId="asst_gx3Htc0gLVNlpBQKLoefkXZZ"
          greeting="I am a helpful chat assistant. How can I help you?"
          messageLimit={10}
        />
      </div>
    </main>
  );
}
