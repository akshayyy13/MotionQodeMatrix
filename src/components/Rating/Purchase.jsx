import React from 'react'
import Stick from "../../Assets/stick.png"
const Purchase = () => {
  return (
    <div>
      <div className=" flex flex-col m1:flex-row mt-[100px] px-4">
        <div className=" m2:w-[80%] flex flex-col gap-4">
          <div className=" m2:w-[60%]">
            <h2 className="purchaseHead text-[#EDE5FF] font-medium outfit-font">
              Turn Your Cursor Into A Colorful Magic Wand &Charm Your Visitors
            </h2>
          </div>
          <div className="m2:w-[70%]">
            <p className="text-[#EDE5FF] outfit-font opacity-70">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </p>
          </div>
          <div className='mt-2 outfit-font mx-auto m1:mx-0'>
            <button className=" text-[20px] bg-gradient-to-r from-[#5E11FF] to-[#F87516] px-6 py-3 rounded-xl text-white font-light">
              Purchase From Envato  ☐
            </button>
          </div>
        </div>
        <div className=' mx-auto m1:mx-0 m1:mt-0 mt-3'>
          <div>
            <img src={Stick} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase
