import React from 'react'

const Footer = () => {
  return (
    <div className=" elementor-section bg-gradient-to-r from-[#F87516] to-[#5E11FF] text-[#EDE5FF] text-[14px]">
      <div className="pt-5 pb-3 px-5 m1:w-[90%] mx-auto">
        <div className=" flex justify-between flex-col-reverse m2:flex-row gap-4">
          <div className=' flex justify-center text-center'>
            <p className=' opacity-70'>© Created By Akshay, Rights reserved by QodeMatrix</p>
          </div>
          <div className=" flex gap-5 justify-center">
            <div>
              <p className=' cursor-pointer opacity-70 hover:opacity-100'>Documentation</p>
            </div>
            <div>
              <p className=' cursor-pointer opacity-70 hover:opacity-100'>Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
