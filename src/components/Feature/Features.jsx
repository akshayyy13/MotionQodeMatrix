import React from "react";
import Thunder from "../../Assets/thunder.png";
import Likes from "../../Assets/likes.png";
import Moon from "../../Assets/moon.png";
const Features = () => {
  return (
    <div className=" mt-[150px]">
      <div className=" flex flex-col w-[48%] justify-center text-center items-center mx-auto gap-3">
        <div>
          <h3 className=" featureHead font-semibold sara-font">
            An All-Round Plugin With Powerful Features
          </h3>
        </div>
        <div>
          <p className=" opacity-70">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
      </div>
      <div className=" mt-[80px] grid grid-cols-1 m1:grid-cols-2 m2:grid-cols-3 gap-6 mb-[120px] px-4">
        <div className="flex flex-col gap-6 bg-gradient-to-b from-[#0F0720] to-[#251E34]  border rounded-xl border-[#332C41]">
          <div>
            <img src={Thunder} alt="" />
          </div>
          <div>
            <h2 className=" text-[2.3rem] px-9">Light Weight</h2>
          </div>
          <div>
            <p className=" px-9 mb-[40px] opacity-70 outfit-font">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-gradient-to-b from-[#0F0720] to-[#251E34]  border rounded-xl border-[#332C41] ">
          <div>
            <img src={Likes} alt="" />
          </div>
          <div>
            <h2 className=" text-[2.3rem] px-9">100% Responsive</h2>
          </div>
          <div>
            <p className=" px-9 opacity-70 outfit-font">
              Create a consistent visual experience across all devices.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6  m1:col-span-2 m2:col-span-1 bg-gradient-to-b from-[#0F0720] to-[#251E34]  border rounded-xl border-[#332C41] ">
          <div>
            <img src={Moon} alt="" />
          </div>
          <div>
            <h2 className=" text-[2.3rem] px-9">User Friendly Interface</h2>
          </div>
          <div>
            <p className=" px-9 opacity-70 outfit-font">
              Ensure a smooth experience for both applicants and administrators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
