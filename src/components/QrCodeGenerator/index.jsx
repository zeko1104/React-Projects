import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGeneratorQrCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>
      <div className="flex flex-col items-center mb-6">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGeneratorQrCode}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Generate
        </button>
      </div>
      <div>
        {qrCode && <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />}
      </div>
    </div>
  );
}
