import React from 'react'
import icon from "../../Assets/icon.png"
import Button from './Button';
const Navbar = () => {
  return (
    <div className="elementor-section p-4">
      <div className="  flex justify-between mx-auto">
        <div className="  py-7">
          <img src={icon} alt="" />
        </div>
        <div className="py-7 hidden lg:block">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Navbar
