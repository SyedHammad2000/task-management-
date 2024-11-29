import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="position-fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center  z-[1000px] "
      onClick={onClose}
    >
      <div
        className=" max-w-[500px] w-[100%] h-[500px] shadow-md "
        style={{ backgroundColor: "rgb(21 21 19)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-white position-absolute bg-transparent top-10 right-20"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
