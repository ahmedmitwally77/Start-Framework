import React, { useState } from "react";

export default function Card({ img }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div
        className="w-full md:w-1/2 lg:w-1/3 p-5 relative "
        onClick={() => setIsShow(img)}
      >
        <div className="inner relative group/lay ">
          <div className="layer bg-teal-500 bg-opacity-80 group-hover/lay:transition-all hidden  group-hover/lay:flex group-hover/lay:duration-1000 duration-1000  absolute left-0 top-0 right-0 bottom-0 rounded-lg  justify-center items-center">
            <i className="fa-solid opacity-100 fa-plus text-8xl text-white"></i>
          </div>
          <img src={img} className="w-full rounded-lg" alt="" />
        </div>
      </div>

      {isShow ? (
        <div
          onClick={(e) =>
            e.target === e.currentTarget ? setIsShow(false) : ""
          }
          className="big-layer left-0 top-0 right-0 bottom-0 fixed flex justify-center items-center z-50 bg-gray-700 bg-opacity-50"
        >
          <img src={isShow} alt="" className="w-[450px] md:w-[600px] " />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
