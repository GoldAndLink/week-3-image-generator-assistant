'use client'
import {useState} from "react";

export default function ImageGenerator({ paintingDescription }) {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/generate-image', {
            method: 'POST',
            body: JSON.stringify({
                paintingDescription
            }),
        });
        setImage(response?.url);
        // const data = await response.json();
        // console.log('Generated image:', data);
    } catch (error) {
        console.error('Error generating image:', error);
        // Todo: Show an error message to the user
    }
        
  };
  // Todo: Add a loader
    return (
        <div>
            {image ? (
              <div className="mt-8 rounded-lg shadow-lg overflow-hidden">
                <img src={image} alt="Generated Art" className="w-full h-auto" />
              </div>
            ) : (
              <button 
                onClick={handleSubmit}
                className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Generate this art piece
              </button>
            )}
        </div>
    )
}
