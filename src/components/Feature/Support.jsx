import React from "react";
import Browsers from "../../Assets/browsers.png";
import Features from "./Features";
const Support = () => {
  return (
    <div className=" elementor-section">
      <div className=" px-6">
        <div className=" w-full  mt-[100px] bg-gradient-to-b from-[#0F0720] to-[#251E34]  border rounded-xl border-[#332C41]">
          <div className="  flex flex-col gap-3 mt-[40px] justify-center items-center">
            <div>
              <h2 className="supportHead font-semibold sara-font">
                Supported by All Popular Browsers
              </h2>
            </div>
            <div className="w-[80%] m1:w-[31%] flex justify-center items-cente text-center ">
              <p className=" opacity-70">
                Rest assured, Motion Art is designed to be compatible with all
                major web browsers.
              </p>
            </div>
            <div className=" mt-5 mb-[40px] px-[2rem]">
              <img src={Browsers} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Support;
