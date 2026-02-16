import React from "react";
import { CircleUser } from "lucide-react";

const Navbar = ({setToggle}) => {
  return (
    <div className="px-15 flex justify-between items-center bg-black text-white">
      <div className="flex items-center gap-5">
        <div className="h-10">
          <img
            className="h-full "
            src="https://i.pinimg.com/1200x/d5/7b/75/d57b75ed30371746f70364dd53bc4511.jpg"
            alt=""
          />
        </div>
        <h1 className="text-xl">Black Shop</h1>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-8 text-xl font-semibold">
          <p onClick={()=>setToggle(false)}  className="cursor-pointer ">
            Home
          </p>
          <p  onClick={()=>setToggle(true)}  className="cursor-pointer">
            Cart
          </p>
          <p className="cursor-pointer">Favourites</p>
        </div>
        <div>
          <CircleUser size={26} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;