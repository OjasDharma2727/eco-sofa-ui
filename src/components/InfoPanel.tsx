// src/components/InfoPanel.tsx

import React from "react";

const InfoPanel: React.FC = () => {
  return (
    // Make sure 'h-full' is NOT on this div.
    <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-2xl shadow-xl text-white flex flex-col items-center">
      {/* Score Badge */}
      <div
        className="w-32 h-32 rounded-full bg-[#6a735a]/70 flex flex-col items-center justify-center mb-6 
                      border-4 border-[#9dbe71] shadow-xl"
      >
        <div className="text-6xl font-extrabold">85</div>
      </div>

      <p className="text-sm opacity-70 mb-2">Sustainability Score</p>

      <p className="text-4xl font-bold mb-8">$1,290</p>

      {/* Buttons */}
      <button
        className="w-full py-3 mb-4 rounded-2xl bg-[#9dbe71] text-white font-semibold text-base
                        hover:bg-[#8bb465] transition duration-200 shadow-md"
      >
        Compare Eco Options
      </button>

      <button
        className="w-full py-3 rounded-2xl bg-[#4a523f] text-white font-semibold text-base
                        hover:bg-[#3c4232] transition duration-200 shadow-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default InfoPanel;
