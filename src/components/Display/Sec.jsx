import React from 'react'
import SecImg from "../../Assets/sectionTemp.png";
const Sec = () => {
  return (
    <div className="  bg-gradient-to-b from-[#0F0720] to-[#251E34] border rounded-xl border-[#332C41] max-h-[555px]">
      <div className=" flex flex-col  p-7 gap-6">
        <div>
          <h3 className=" text-[2rem]"> Apply On Section</h3>
        </div>
        <div>
          <p className=" opacity-70">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={SecImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sec
