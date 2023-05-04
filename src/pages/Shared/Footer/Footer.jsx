import React from "react";

const Footer = () => {
  return (
    <div className="px-4 relative   py-16 md:px-24 lg:px-32 lg:py-20 bg-[#255946] ">
      <img className="w-full h-4 absolute z-10 -top-4 left-0" src="https://f8g8b9p5.rocketcdn.me/themes/agrikon/wp-content/uploads/2020/12/ripped-paper-base-2.png" alt="" />
      <div>
        <div className="grid gird-cols-1 md:grid-cols-4 w-9/12 mx-auto gap-6  ">
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">Explore</h2>
            <ul className="space-y-3 chef-footer ">
              <li>Recipes</li>
              <li>Fitness</li>
              <li>Healthy Living </li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">PrimoChefs</h2>
            <ul className="space-y-3 chef-footer ">
              <li>About us</li>
              <li>Careers </li>
              <li>Contact us</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">Legal</h2>
            <ul className="space-y-3 chef-footer ">
              <li>Terms</li>
              <li>Conditions</li>
              <li>Cookies </li>
              <li>Copyright</li>
            </ul>
          </div>
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">Follow</h2>
            <ul className="space-y-3 chef-footer ">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr className="mt-10 w-4/5 border mx-auto " />
        <div className="mt-11">
          <p className="text-center text-gray-50">&copy; 2023 by primochefs.web.app</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
