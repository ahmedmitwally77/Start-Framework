import React from "react";

export default function Star({ color }) {
  return (
    <div className="star flex items-center">
      <span className={`w-[100px] h-1 bg-[${color}]  bg-${color}   `}></span>
      <i className={`fa-solid fa-star text-${color} text-[${color}]   mx-5 fa-spin`}></i>
      <span className={`w-[100px] h-1 bg-[${color}] bg-${color}  `}></span>
    </div>
  );
}
