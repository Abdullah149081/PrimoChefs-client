/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";

import { TiTimesOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:sticky top-0 z-10 lg:mt-5">
      <nav className="lg:px-32 h-20 flex justify-between items-center pl-4 bg-white ">
        <div>
          <Link to="/">
            <h2 className="text-4xl font-bold">
              <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#068F3D] via-black to-black">PrimoChefs</span>
            </h2>
          </Link>
        </div>

        <div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            role="button"
            tabIndex="0"
          >
            <span className="pr-12 md:pr-0 ">
              {open ? <TiTimesOutline className="h-6 w-7 mt-7 md:hidden text-gray-900 cursor-pointer" /> : <FaAlignRight className="h-5 w-5 mt-7 md:hidden text-gray-900  cursor-pointer" />}
            </span>
          </div>

          <div
            className={`flex  flex-col  md:py-0 md:space-x-10  font-bold  md:shadow-none   md:static md:flex-row  md:block ${
              open ? "top-22 left-0  w-full text-center py-12   shadow-lg pl-12 pr-6 space-y-6   absolute z-10 bg-white" : "hidden"
            }`}
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <button type="button" className="btn  mx-auto w-2/4 block  lg:hidden ">
              login
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <button type="button" className="btn font-bold hidden lg:block">
            login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
