/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from "react";
import { FaAlignRight, FaUserSlash } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { TiTimesOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProviders";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handlerLogOut = () => {
    logOut();
  };

  return (
    <div className="md:sticky top-0 z-20  bg-white shadow-lg">
      <img className="absolute top-20 w-full" src="https://f8g8b9p5.rocketcdn.me/themes/agrikon/wp-content/themes/agrikon/images/shapes/ripped-paper-header-1.png" alt="" />

      <nav className="lg:px-32 h-20 flex justify-between items-center pl-4  ">
        <div>
          <Link to="/">
            <h2 className="text-2xl lg:text-4xl font-bold">
              <span className=" font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#068F3D] via-black to-black">PrimoChefs</span>
            </h2>
          </Link>
        </div>
        <div className="md:hidden ml-auto">
          {user && (
            <p title={user?.displayName}>
              <img className="w-10 h-10 rounded-full ring-offset-2 ring-2 ring-emerald-800" src={user?.photoURL} alt="" />
            </p>
          )}
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
              {open ? (
                <TiTimesOutline className="h-6 w-7 mt-7 ml-4  md:hidden text-gray-900 cursor-pointer" />
              ) : (
                <FaAlignRight className=" ml-4 h-5 w-5 mt-7 md:hidden text-gray-900  cursor-pointer" />
              )}
            </span>
          </div>

          <div
            className={`flex  flex-col  md:py-0 md:space-x-10  font-bold  md:shadow-none   md:static md:flex-row  md:block ${
              open ? "top-22 left-0  w-full text-center py-12   shadow-lg pl-12 pr-6 space-y-6   absolute z-10 bg-white" : "hidden"
            }`}
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            {!user && <ActiveLink to="/sign-in">Sign in</ActiveLink>}
            {user && (
              <button onClick={handlerLogOut} type="button" className="btn  mx-auto w-2/4 block  lg:hidden ">
                <span className="inline-flex gap-2 ">
                  logout <FiLogOut className="w-4 h-4" />
                </span>
              </button>
            )}
          </div>
        </div>
        <div className="hidden lg:inline-block">
          <div className="flex items-center gap-4">
            {user && (
              <p title={user?.displayName}>
                <img className="w-10 h-10 rounded-full ring-offset-2 ring-2 ring-emerald-800" src={user?.photoURL} alt="" />
              </p>
            )}
            <div>
              {user ? (
                <button onClick={handlerLogOut} type="button" className="btn font-bold ">
                  <span className="inline-flex gap-2 ">
                    logout <FiLogOut className="w-4 h-4" />
                  </span>
                </button>
              ) : (
                <div className="bg-amber-500 rounded-full p-2">
                  <FaUserSlash className="w-7 h-7 rounded-full" />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
