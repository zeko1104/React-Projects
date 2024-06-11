import React, { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-500">
      <button
        className="w-40 h-14 bg-purple-700 text-white rounded-xl hover:bg-purple-400"
        onClick={handleToggleModalPopup}
      >
        Open Modal PopUp
      </button>
      {showModalPopup && <Modal onClose={onClose}/>}
    </div>
  );
}
