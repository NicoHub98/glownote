import React from "react";

const BtnNavbar = ({ text, fn }) => {
  return (
    <button
      onClick={fn}
      className="bg-[#00c] py-1 px-6 m-2 rounded-md text-white hover:scale-105 active:scale-100 transition-all"
    >
      {text}
    </button>
  );
};

export default BtnNavbar;
