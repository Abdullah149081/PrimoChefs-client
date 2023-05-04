/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const PrimoChefsSub = () => {
  return (
    <div className="lg:w-4/5 mx-auto rounded items-center flex flex-col lg:flex-row justify-between bg-gray-100 py-16 px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center gap-7">
        <MdOutlineMarkEmailUnread className="w-10 h-10" />
        <div className="space-y-2">
          <h2 className="text-lg lg:text-2xl font-semibold">Subscribe to my PrimoChefs</h2>
          <p className="text-lg text-gray-600">We'll keep you posted with news and updates !</p>
        </div>
      </div>
      <div className="flex mt-6 lg:mt-0">
        <input type="email" placeholder="Please enter your e-mail" className="input input-bordered w-full max-w-xs rounded bg-slate-100" />
        <button className="btn subscribe-btn " type="button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PrimoChefsSub;
