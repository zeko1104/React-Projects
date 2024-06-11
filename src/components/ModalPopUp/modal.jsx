import React, { useState, useEffect } from "react";

export default function Modal({ id, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 300); 
  }

  return (
    <div
      id={id || "Modal"}
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative bg-gray-100 p-6 border w-[80%] h-[80%] rounded-3xl transition-transform duration-300 transform-gpu scale-95">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Header</h2>
          <span onClick={handleClose} className="cursor-pointer text-4xl font-bold">
            &times;
          </span>
        </div>
        <div className="mt-4">
          <p className="text-xl font-serif text-red-600">This is our Modal body</p>
        </div>
        <div className="mt-4">
          <h2 className="font-bold text-3xl">Footer</h2>
        </div>
      </div>
    </div>
  );
}
