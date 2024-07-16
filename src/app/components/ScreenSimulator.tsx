"use client";
import React, { useState } from "react";
const screenFormats = [
  { width: 1920, height: 1080, label: "Full HD" },
  { width: 1366, height: 768, label: "HD" },
  { width: 1440, height: 900, label: "WXGA+" },
  // 必要に応じて解像度を追加
];

const InputField = ({
  text,
  inputValue,
  callBack,
}: {
  text: string;
  inputValue: any;
  callBack: (e: React.ChangeEvent<HTMLInputElement>) => any;
}) => {
  return (
    <div className="mr-4">
      <label className="block">
        {text}:
        <input
          type="number"
          value={inputValue}
          onChange={(e) => callBack(e)}
          className="border p-2 rounded ml-2"
        />
      </label>
    </div>
  );
};
const ScreenSimulator: React.FC = () => {
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(768);
  const [url, setUrl] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold my-4">画面シミュレーションツール</h2>
      <div className="mb-4 flex flex-col sm:flex-row items-center">
        <label className="block">
          解像度:
          <select
            className="border p-2 rounded ml-2"
            onChange={(e) => {
              const selectedScreenPropaty = screenFormats.find(
                (res) => res.label === e.target.value
              );
              if (selectedScreenPropaty !== undefined) {
                setWidth(() => selectedScreenPropaty.width);
                setHeight(() => selectedScreenPropaty.height);
              }
            }}
          >
            {screenFormats.map((props) => (
              <option key={props.label}>{props.label}</option>
            ))}
          </select>
        </label>
        <InputField
          text="幅"
          inputValue={width}
          callBack={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWidth(Number(e.target.value))
          }
        />
        <InputField
          text="高さ"
          inputValue={height}
          callBack={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block">
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>
      </div>
      <div
        className="border mt-4 overflow-auto text-center bg-gray-200 p-4"
        style={{ width, height }}
      >
        <iframe
          src={url}
          width={width}
          height={height}
          title="Screen Simulation"
          className="border-none"
        />
      </div>
    </div>
  );
};

export default ScreenSimulator;
