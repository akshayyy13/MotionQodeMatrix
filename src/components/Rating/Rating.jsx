import React from 'react'
import RateBoxes from './RateBoxes';
import Purchase from './Purchase';

const Rating = () => {
  return (
    <div className="elementor-section">
      <div className=" flex flex-col mt-[100px]">
        <p className=" text-[#EDE5FF] mx-auto text-[22px] outfit-font">
          Trusted by thousands of users around the world
        </p>
      </div>
      <RateBoxes/>
      <Purchase/>
    </div>
  );
}

export default Rating
