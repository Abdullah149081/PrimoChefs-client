import React from "react";
import { FaRegComments } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";

const RecentBlog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-4/5 mx-auto">
      <div className="card card-compact  w-full rounded bg-base-100 hover:shadow-xl">
        <figure className="w-full h-44 lg:h-60">
          <img src="https://hips.hearstapps.com/hmg-prod/images/pesto-pasta-saladpin-1649262751.jpg?crop=0.663xw:0.418xh;0.337xw,0.393xh&resize=980:*" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Pesto Pasta Salad</h2>
          <div className="flex justify-between ">
            <span className="inline-flex gap-2 items-center lg:px-10">
              <RiUserStarLine className="text-orange-500 w-4 h-4" /> by alice
            </span>
            <span className="inline-flex gap-2 items-center">
              <FaRegComments className="text-orange-500 w-4 h-4" /> 2 Comment
            </span>
          </div>
          <p className="font-medium text-sm text-gray-700 mt-4">
            The star of this pasta salad is the fresh, homemade pesto. All you’ll need is pine nuts, garlic, basil, a good quality olive oil, ....
            <span className="text-orange-700 font-bold cursor-pointer">Read More</span>{" "}
          </p>
        </div>
      </div>
      <div className="card card-compact  w-full rounded bg-base-100 shadow-xl">
        <figure className="w-full h-44 lg:h-60">
          <img src="https://hips.hearstapps.com/hmg-prod/images/lemon-icebox-pie-1660430963.jpg?crop=1.00xw:0.672xh;0,0.214xh&resize=980:*" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Lemon Icebox Pie</h2>
          <div className="flex justify-between lg:px-10">
            <span className="inline-flex gap-2 items-center ">
              <RiUserStarLine className="text-orange-500 w-4 h-4" /> by robert
            </span>
            <span className="inline-flex gap-2 items-center">
              <FaRegComments className="text-orange-500 w-4 h-4" /> 1 Comment
            </span>
          </div>
          <p className="font-medium text-sm text-gray-700 mt-4">
            We started this recipe attempting to use a similar technique as the classic icebox cake. If you’re wondering, “What is an icebox cake??....
            <span className="text-orange-700 font-bold cursor-pointer">Read More</span>{" "}
          </p>
        </div>
      </div>
      <div className="card card-compact  w-full rounded bg-base-100 hover:shadow-xl">
        <figure className="w-full h-44 lg:h-60 ">
          <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/30/1501020919-shot-1-46.jpg?crop=1.00xw:0.667xh;0,0.139xh&resize=980:*" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chicken Quesadillas</h2>
          <div className="flex justify-between lg:px-10">
            <span className="inline-flex gap-2 items-center ">
              <RiUserStarLine className="text-orange-500 w-4 h-4" /> by lauren
            </span>
            <span className="inline-flex gap-2 items-center">
              <FaRegComments className="text-orange-500 w-4 h-4" /> 1 Comment
            </span>
          </div>
          <p className="font-medium text-sm text-gray-700 mt-4">
            If we’re being honest, you don’t really need a recipe to make this staple late-night meal. But, if you’re looking for some guidance ....
            <span className="text-orange-700 font-bold cursor-pointer">Read More</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
