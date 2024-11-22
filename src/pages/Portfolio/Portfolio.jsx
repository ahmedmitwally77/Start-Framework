import React, { useState } from "react";
import Star from "../../Components/Star/Star";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import Card from "../../Components/Card/Card";

export default function Portfolio() {
  let arr=[img1,img2,img3,img1,img2,img3]
  return (
    <div className={` section bg-white flex flex-col items-center`}>
      <div className="max-w-screen-xl mx-auto  ">
        <div className="container flex flex-col items-center text-center ">
          <h1 className="text-4xl text-[#2C3E50] font-bold uppercase mt-9 mb-7 text-center">
            Portfolio Component
          </h1>
          <Star color={"#2C3E50"} />
          <div className="row flex flex-wrap py-8">
            {arr.map((item,index) => (
              <Card img={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
