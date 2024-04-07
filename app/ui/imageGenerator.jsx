import { useState } from "react";

const ImageGenerator = ({ paintingDescription }) => {
    const [image, setImage] = useState(null);
    const [quality, setQuality] = useState("standard");
    const [style, setStyle] = useState("vivid");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (!paintingDescription) return;

        setLoading(true);
        setError(null);
        console.log(paintingDescription);

        try {
            const response = await fetch("/api/generate-image", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: paintingDescription, quality, style }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate image');
            }

            const { imageUrl } = await response.json();
            setImage(imageUrl);
        } catch (error) {
            console.error("Error generating image:", error);
            setError('Error generating image');
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
                    <img src={image} alt="Generated Art" className="w-full h-auto"/>
                </div>
            ) : (
                <>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full sm:w-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Generate this art piece
                    </button>
                    <div className="mt-4 space-y-2">
                        <div className="text-center">
                            <h2 className="text-3xl py-8 font-semibold mx-auto text-gray-200">Choose your Quality</h2>
                        </div>
                        <section className="flex flex-col sm:flex-row justify-center gap-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="standard"
                                    name="quality"
                                    value="standard"
                                    checked={quality === "standard"}
                                    onChange={(e) => setQuality(e.target.value)}
                                    className="mr-2 "
                                />
                                <label htmlFor="standard" className="text-gray-200 text-xl font-mono">Standard</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="hd"
                                    name="quality"
                                    value="HD"
                                    checked={quality === "HD"}
                                    onChange={(e) => setQuality(e.target.value)}
                                    className="mr-2"
                                />
                                <label htmlFor="hd" className="text-gray-200 text-xl font-mono">HD</label>
                            </div>
                        </section>
                                <h2 className="text-3xl py-8 font-semibold mx-auto text-gray-200">Choose your Style</h2>
                        <section className="flex flex-col sm:flex-row justify-center gap-4">
                            <div className="text-center">
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="vivid"
                                    name="style"
                                    value="vivid"
                                    checked={style === "vivid"}
                                    onChange={(e) => setStyle(e.target.value)}
                                    className="mr-2"
                                />
                                <label htmlFor="vivid" className=" text-gray-200 text-xl font-mono">Vivid</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="natural"
                                    name="style"
                                    value="natural"
                                    checked={style === "natural"}
                                    onChange={(e) => setStyle(e.target.value)}
                                    className="mr-2"
                                />
                                <label htmlFor="natural" className="text-gray-200 text-xl font-mono">Natural</label>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageGenerator;
