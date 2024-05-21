import React from "react";
import HighlightText from "./HighlightText";

const Landing = () => {
  return (
    <div className=" mx-auto mt-[80px] elementor-section p-4">
      <div className=" flex flex-col m1:flex-row  gap-[100px]">
        {/* Left */}
        <div className=" flex flex-col justify-center items-center">
          <div className=" m1:w-[75%] text-[18px] outfit-font">
            <HighlightText text={"transform Your Website"} />
          </div>
          <div className="m1:w-[75%] pt-4">
            <p className=" text-[#EDE5FF] outfit-font">
              With Motion Art Effect
            </p>
          </div>
        </div>

        {/* Right */}

        <div className=" flex flex-col">
          <div>
            <h1 className=" text-[#EDE5FF]  m3xl:w-[55%] m1:w-[57%] font-medium  duration-100 transition-all landingText">
              Attract Your Visitors Attention With Colorful
            </h1>
          </div>
          <div className=" m1:w-[57%] font-medium landingText">
            <HighlightText text={"Motion Art Effect"} />
          </div>
          <div className=" m3xl:w-[57%] m1:w-[70%] leading-[1.6em]">
            <p className=" text-[#EEE5FFBD] text-[18px] pt-6 outfit-font">
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
