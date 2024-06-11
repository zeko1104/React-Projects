import React from "react";

export default function Suggestions({ data, handleClick }) {
  return (
    <ul className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
      {data && data.length
        ? data.map((item, index) => (
            <li
              onClick={handleClick}
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
