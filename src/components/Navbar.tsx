/** @format */

import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Searchbox } from "./Searchbox";

const Navbar = () => {
  return (
    <div className="sticks">
      <nav className="bg-[#3863A0] flex pt-2 pl-2 py-3 mb-3">
        <ModeToggle />
        <Searchbox />
        <div className="ml-auto mr-3 ">
          <button className="bg-[#1E3250] text-white rounded px-3 py-2">
            Action
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
