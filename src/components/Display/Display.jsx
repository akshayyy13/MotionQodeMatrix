import React from "react";
import Sec from "./Sec";
import Page from "./Page";

const Display = () => {
  return (
    <div className="elementor-section outfit-font">
      <div className=" mt-[100px]">
        <div className=" flex flex-col">
          <div className=" w-[50%] flex justify-center text-center mx-auto">
            <h2 className="text-[#EDE5FF] displayHead  font-inter">
              Apply On Any Section Or Enable For Whole Page
            </h2>
          </div>
          <div className=" grid grid-cols-1 m1:grid-cols-2 px-4 text-[#EDE5FF] mt-[80px] gap-5">
            <Sec />
            <Page/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
