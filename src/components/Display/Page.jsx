import React from 'react'
import PageImg from "../../Assets/pageTemp.png"
const Page = () => {
  return (
    <div className=" mt-[60px] bg-gradient-to-b from-[#0F0720] to-[#251E34]  border rounded-xl border-[#332C41]">
      <div className=" flex flex-col  p-7 gap-6">
        <div>
          <h3 className=" text-[2rem]"> Apply On Page</h3>
        </div>
        <div>
          <p className=" opacity-70">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.{" "}
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <img src={PageImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page
