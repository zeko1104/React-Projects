import React from "react";
import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="flex h-[100vh] w-[100vw] justify-center items-center">
      <div className="w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="bg-[#614101] mb-[10px] p-3">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="text-white flex justify-between items-center"
              >
                <h3 className="font-bold">{dataItem.question}</h3>
                <span className="cursor-pointer text-xl">+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="text-[#ffffff] h-auto">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
