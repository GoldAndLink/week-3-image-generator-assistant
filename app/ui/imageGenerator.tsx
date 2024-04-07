"use client";
import { useState } from "react";

interface ImageGeneratorProps {
    paintingDescription: string;
}

interface RadioOptionProps {
    id: string;
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ paintingDescription }) => {
    const [image, setImage] = useState<string | null>(null);
    const [quality, setQuality] = useState<string>("standard");
    const [style, setStyle] = useState<string>("vivid");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!paintingDescription) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/generate-image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: paintingDescription, quality, style }),
            });

            if (!response.ok) {
                throw new Error("Failed to generate image");
            }

            const { imageUrl } = await response.json();
            setImage(imageUrl);
        } catch (error) {
            console.error("Error generating image:", error);
            setError("Error generating image");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-8 px-4 sm:px-6 lg:px-8">
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {image ? (
                <div className="mt-8 rounded-lg shadow-lg overflow-hidden">
                    <img src={image} alt="Generated Art" className="w-full h-auto" />
                </div>
            ) : (
                <div className="space-y-4">
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        Generate this art piece
                    </button>
                    <div>
                        <h2 className="text-3xl py-8 font-semibold mx-auto text-gray-200">
                            Choose your Quality
                        </h2>
                        <QualityOptions quality={quality} setQuality={setQuality} />
                    </div>
                    <div>
                        <h2 className="text-3xl py-8 font-semibold mx-auto text-gray-200">
                            Choose your Style
                        </h2>
                        <StyleOptions style={style} setStyle={setStyle} />
                    </div>
                </div>
            )}
        </div>
    );
};

const QualityOptions: React.FC<{
    quality: string;
    setQuality: (value: string) => void;
}> = ({ quality, setQuality }) => (
    <section className="flex flex-col sm:flex-row justify-center gap-4">
        <RadioOption
            id="standard"
            label="Standard"
            value="standard"
            checked={quality === "standard"}
            onChange={setQuality}
        />
        <RadioOption
            id="hd"
            label="HD"
            value="hd"
            checked={quality === "hd"}
            onChange={setQuality}
        />
    </section>
);

const StyleOptions: React.FC<{
    style: string;
    setStyle: (value: string) => void;
}> = ({ style, setStyle }) => (
    <section className="flex flex-col sm:flex-row justify-center gap-4">
        <RadioOption
            id="vivid"
            label="Vivid"
            value="vivid"
            checked={style === "vivid"}
            onChange={setStyle}
        />
        <RadioOption
            id="natural"
            label="Natural"
            value="natural"
            checked={style === "natural"}
            onChange={setStyle}
        />
    </section>
);

const RadioOption: React.FC<RadioOptionProps> = ({
                                                     id,
                                                     label,
                                                     value,
                                                     checked,
                                                     onChange,
                                                 }) => (
    <div className="flex items-center">
        <input
            type="radio"
            id={id}
            name={id}
            value={value}
            checked={checked}
            onChange={(e) => onChange(e.target.value)}
            className="mr-2"
        />
        <label htmlFor={id} className="text-gray-200 text-xl font-mono">
            {label}
        </label>
    </div>
);

export default ImageGenerator;
