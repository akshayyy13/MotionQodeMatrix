import React from "react";
import Star1 from "../../Assets/star1.png"
import Star2 from "../../Assets/star2.png"
import Star3 from "../../Assets/star3.png"
import Stars from "../../Assets/stars.png"

const RateBoxes = () => {
  return (
    <div className="grid grid-cols-1 m1:grid-cols-2 m2:grid-cols-3 mt-[70px] gap-[50px] px-5 ">
      <div className="flex justify-center items-center gap-3 #">
        <div className=" w-[88px] aspect-square bg-[#0D061F] rounded-full">
          <img src={Star1} alt="" />
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <img src={Stars} alt="" />
          </div>
          <div>
            <p className=" text-[#EDE5FF] opacity-70">4.5 Score,9 Reviews</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className=" w-[88px] aspect-square bg-[#0D061F] rounded-full">
          <img src={Star2} alt="" />
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <img src={Stars} alt="" />
          </div>
          <div>
            <p className=" text-[#EDE5FF] opacity-70">4.5 Score,9 Reviews</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center m1:col-span-2 m2:col-span-1 items-center gap-3">
        <div className=" w-[88px] aspect-square bg-[#0D061F] rounded-full">
          <img src={Star3} alt="" />
        </div>
        <div className=" flex flex-col gap-4">
          <div>
            <img src={Stars} alt="" />
          </div>
          <div>
            <p className=" text-[#EDE5FF] opacity-70">4.5 Score,9 Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateBoxes;
