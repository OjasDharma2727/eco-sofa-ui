// src/components/BottomControls.tsx

import React from "react";
// This needs the clean image for the thumbnail
import sofaImage from "../assets/sofa.png";

const lightingOptions = [
  { name: "Morning", icon: "☀️" },
  { name: "Sunset", icon: "🌅" },
  { name: "Warm Glow", icon: "💡" },
];

const BottomControls: React.FC = () => {
  return (
    <div className="flex justify-between items-center text-white text-opacity-80">
      {/* Thumbnails */}
      <div className="flex space-x-2">
        <div className="w-20 h-16 bg-[#f0e4d8] rounded-lg border-2 border-[#9dbe71] overflow-hidden flex items-center justify-center">
          <img
            src={sofaImage}
            alt="Sofa thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-24 h-20 bg-white/20 rounded-2xl border border-white/20">
          {/* Empty thumbnail */}
        </div>
      </div>

      {/* Lighting Options */}
      <div className="flex space-x-6">
        {lightingOptions.map((option) => (
          <button
            key={option.name}
            className="flex flex-col items-center text-white/90"
          >
            <div className="w-10 h-10 rounded-full bg-[#6a735a]/50 flex items-center justify-center text-2xl mb-1 border border-white/20 shadow-md">
              {option.icon}
            </div>
            <span className="text-xs font-medium">{option.name}</span>
          </button>
        ))}
      </div>

      {/* Add to Cart Button */}
      <button
        className="px-6 py-3 rounded-xl bg-[#6a735a] font-bold text-white text-base 
                        shadow-xl hover:bg-[#5e664f] transition"
      >
        Add to cart
      </button>
    </div>
  );
};

export default BottomControls;
