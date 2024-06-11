import React from "react";
import { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div className="w-[100vw] h-[100vh]" style={{ background: color }}>
      <button
        onClick={() => setTypeOfColor("hex")}
        className="text-white bg-gray-600 rounded-lg w-40 h-12 hover:bg-gray-400"
      >
        Create HEX Color
      </button>
      <button
        onClick={() => setTypeOfColor("rgb")}
        className="text-white bg-gray-600 rounded-lg w-40 h-12 hover:bg-gray-400"
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
        className="text-white bg-gray-600 rounded-lg w-44 h-12 hover:bg-gray-400"
      >
        Generate Random Color
      </button>
      <div className="flex justify-center items-center text-white text-[60px] mt-12 flex-col gap-5">
        <h3>{typeOfColor === "rgb" ? "RGb Color" : "HEX Color "}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
