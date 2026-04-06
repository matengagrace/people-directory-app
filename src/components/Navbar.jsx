import React from "react";

function Navbar() {
  return (
    <div className="w-full h-17.5 bg-[#3636f6] text-white flex items-center justify-center ">
      <nav className="w-[90%] flex items-center justify-between lg:w-[80%] ">
        <h1 className="text-xl font-bold lg:text-2xl">People Directory App</h1>
        <button className="btn_primary hover:bg-[#3636f6] hover:border-2 hover:border-white hover:text-white"> Get Started</button>
      </nav>
    </div>
  );
}

export default Navbar;
