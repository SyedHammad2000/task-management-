import React from "react";

const Important = () => {
  return (
    <div
      className="w-[100%] h-[100vh] rounded-md py-3 px-3 space-y-2"
      style={{ backgroundColor: "rgb(21 21 19)" }}
    >
      <div className="relative w-[100px] h-[25px]">
        <h1 className="text-[#FFF7D1] ">Important</h1>
        <span className="absolute bottom-0 left-0 h-[2px] bg-[#FFF7D1] w-[20px] "></span>
      </div>
      <div className="flex gap-2">
        <div></div>
      </div>
    </div>
  );
};

export default Important;
