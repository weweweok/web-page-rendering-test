import React from "react";
import ScreenSimulator from "./components/ScreenSimulator";

const App: React.FC = () => {
  return (
    <div className="text-center font-sans">
      <h1 className="text-3xl font-bold my-6 text-gray-800">
        解像度と画面サイズシミュレーションツール
      </h1>
      <ScreenSimulator />
    </div>
  );
};

export default App;
