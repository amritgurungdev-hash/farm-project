
import { useState } from "react";
import achivement from "../data/Achivement.js";

export default function AchivementBody() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-8 px-5 mt-12 sm:grid-cols-3 lg:grid-cols-4 xl:px-30">
        {achivement.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4 text-center"
          >
            <img
              className="w-full max-w-[200px] cursor-pointer rounded-lg transition-transform hover:scale-105"
              src={item.img}
              alt={item.name}
              onClick={() => setSelectedImage(item)}
            />

            <p className="text-xl font-bold">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-6 text-4xl text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            &times;
          </button>

          {/* Full-size image */}
          <img
            src={selectedImage.img}
            alt={selectedImage.name}
            className="max-h-[90vh] max-w-[95vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
