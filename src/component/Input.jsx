import React from "react";

export const Input = ({ className, type, placeholder, ref, value }) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        ref={ref}
        value={value}
      />
    </>
  );
};

export const Inpstyle =
  "bg-[#0b090a] text-[13px] border-1 rounded-sm py-1 px-1  text-white border-white placeholder:text-gray-600";
//!Input style
