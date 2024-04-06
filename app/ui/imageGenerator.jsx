"use client"
import {useState} from "react";
import Image from "next/image";

const ImageGenerator = ({paintingDescription}) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (!paintingDescription) return;

        setLoading(true);
        setError(null);
        console.log(paintingDescription)

        try {
            const response = await fetch("/api/generate-image", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({message: paintingDescription}),
            });

            if (!response.ok) {
                throw new Error('Failed to generate image');
            }

            const {imageUrl} = await response.json();
            setImage(imageUrl);
        } catch (error) {
            console.error("Error generating image:", error);
            setError('Error generating image');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {image ? (
                <div className="mt-8 rounded-lg shadow-lg overflow-hidden">
                    <img src={image} width={500}
                           height={500} alt="Generated Art" className="w-full h-auto"/>
                </div>
            ) : (
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-300"
                >
                    Generate this art piece
                </button>
            )}
        </div>
    );
};

export default ImageGenerator;
