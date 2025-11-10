// src/components/Sidebar.tsx

import React from "react";

const materials = [
  { name: "Cotton", color: "#e5e5e5" },
  { name: "Jute", color: "#b99c80" },
  { name: "Rattan", color: "#a56c4d" },
  { name: "Recycled Fabric", color: "#97977a" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-2xl shadow-xl text-white text-opacity-80">
      <h3 className="text-lg font-semibold mb-6">Natural Materials</h3>

      {materials.map((material) => (
        // FIX: Re-adding the "box" styling
        <div
          key={material.name}
          className="flex items-center space-x-3 mb-4 cursor-pointer hover:bg-white/15 p-2 rounded-xl transition duration-150"
        >
          <span
            className="w-8 h-8 rounded-full shadow-md border border-white/30"
            style={{ backgroundColor: material.color }}
          ></span>
          <span className="font-medium text-base">{material.name}</span>
        </div>
      ))}

      {}
      <div className="mt-6 space-y-3 pt-6 border-t border-white/20">
        {/* FIX: Re-adding the "box" styling */}
        <div className="flex justify-between items-center cursor-pointer hover:bg-white/15 p-2 rounded-xl">
          <span className="font-medium text-base">Jute</span>
          <span className="text-xl">&gt;</span>
        </div>
        {}
        <div className="flex justify-between items-center cursor-pointer hover:bg-white/15 p-2 rounded-xl">
          <span className="font-medium text-base">Wecod</span>
          <span className="text-xl">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
