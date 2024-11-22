import React from "react";
import Star from "../../Components/Star/Star";
export default function About() {
  return (
    <>
      <div
        className={`bg-[#1ABC9C] section text-center flex flex-col items-center justify-center `}
      >
        <div className="max-w-screen-xl mx-auto  ">
          <div className="container flex flex-col items-center">
            <h1 className="text-4xl text-white font-bold uppercase mt-9 mb-7 text-center">
              About Component
            </h1>
          <Star color={"white"} />


            <div className="text flex mt-7 lg:flex-row flex-col gap-4 text-white justify-center">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
