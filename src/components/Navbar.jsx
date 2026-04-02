import React from "react";

function Navbar() {
  return (
    <div className="w-full h-17.5 bg-[#3636f6] text-white flex items-center justify-center ">
      <nav className="w-[90%] flex items-center justify-between lg:w-[80%] ">
        <h1 className="text-xl font-bold lg:text-2xl">People Directory App</h1>
        <button className="bg-black text-white py-1.5 px-2 outline-0 border-0 rounded-[30px] cursor-pointer text-[16px] hover:bg-[#3636f6] hover:border-2 hover:border-white hover:text-white"> Get Started</button>
      </nav>
    </div>
  );
}

export default Navbar;
