// src/App.tsx

import React from "react";
import Sidebar from "./components/Sidebar";
import InfoPanel from "./components/InfoPanel";
import BottomControls from "./components/BottomControls";
import sofaImage from "./assets/sofa.png";

function App() {
  return (
    <div className="min-h-screen bg-[#6a735a] flex justify-center items-center py-10 font-sans">
      <div
        className="w-[90%] max-w-[1400px] aspect-video rounded-[3rem] 
                    shadow-2xl relative overflow-hidden"
      >
        <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center text-white text-opacity-80 px-10 z-20">
          <div className="text-xl font-bold tracking-wide">LOGO</div>
          <div className="flex items-center space-x-4">
            <div className="px-3 py-1 rounded-full bg-[#6a735a]/80 text-xs font-semibold">
              ECO
            </div>
            <div className="px-3 py-1 rounded-full border border-[#9dbe71] text-xs font-semibold">
              ECO CERTIFIED
            </div>
          </div>
        </header>

        <img
          src={sofaImage}
          alt="Sofa background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <main className="absolute inset-0 p-8 pt-24 pb-32 z-10 flex items-start space-x-4">
          {/* FIX 1: Width changed from w-[25%] to w-[22%] */}
          <div className="w-[22%]">
            <Sidebar />
          </div>

          {/* FIX 2: Width changed from w-[50%] to w-[56%] */}
          <div className="w-[56%] h-full">{/* Empty space */}</div>

          {/* FIX 3: Width changed from w-[25%] to w-[22%] */}
          <div className="w-[22%]">
            <InfoPanel />
          </div>
        </main>

        <footer className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-2xl shadow-xl">
            <BottomControls />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
