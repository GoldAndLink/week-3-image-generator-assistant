"use client"
import { useState } from "react"
import Image from "next/image"

const ImageGenerator = ({ paintingDescription }) => {
  const [image, setImage] = useState(null)
  const [quality, setQuality] = useState(null)
  const [style, setStyle] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    if (!paintingDescription) return

    setLoading(true)
    setError(null)
    console.log(paintingDescription)

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: paintingDescription, quality, style }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate image")
      }

      const { imageUrl } = await response.json()
      setImage(imageUrl)
    } catch (error) {
      console.error("Error generating image:", error)
      setError("Error generating image")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {image ? (
        <div className="mt-8 rounded-lg shadow-lg overflow-hidden">
          <img
            src={image}
            width={500}
            height={500}
            alt="Generated Art"
            className="w-full h-auto"
          />
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
      <>
        {" "}
        <div className="">
          <div className="image-quality">
            <input
              type="radio"
              id="huey"
              name="Standard"
              value="Standard"
              checked={quality === "Standard"}
              onChange={(e) => setQuality(e.target.value)}
            />
            <label for="HD">Standard</label>
            <input
              type="radio"
              id="huey"
              name="HD"
              value="HD"
              checked={quality === "HD"}
              onChange={(e) => setQuality(e.target.value)}
            />
            <label for="HD">HD</label>
          </div>
          <div className="image-style">
            <input
              type="radio"
              id="huey"
              name="Vivid"
              value="Vivid"
              checked={style === "Vivid"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <label for="HD">Vivid</label>
            <input
              type="radio"
              id="Natural"
              name="HD"
              value="Natural"
              checked={style === "Natural"}
              onChange={(e) => setStyle(e.target.value)}
            />
            <label for="HD">Natural</label>
          </div>
        </div>
      </>
    </div>
  )
}

export default ImageGenerator
