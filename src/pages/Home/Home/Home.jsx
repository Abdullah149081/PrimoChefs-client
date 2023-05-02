import Lottie from "lottie-react";
import banner from "../../../assets/banner.jpg";
import chef from "../../../assets/chef.json";

const Home = () => {
  return (
    <div className="px-4 py-16 md:px-24 lg:px-28 lg:py-20 ">
      {/* banner  */}
      <img className="absolute hidden lg:block -z-0 -top-52 right-0 w-full" src={banner} alt="" />
      <div className="flex relative z-0  flex-col md:flex-row items-center justify-between  ">
        <div className="lg:w-1/2 space-y-8 ">
          <h1 className="text-4xl md:text-7xl font-bold lg:leading-tight ">
            BEST FOOD FOR <span className="text-g ">YOUR TASTE</span>
          </h1>
          <p className="text-stone-500 lg:text-2xl">Experience the artistry of our culinary masters and savor every bite of our exquisite dishes!</p>
          <button type="button" className="btn font-bold">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto ">
            <Lottie animationData={chef} loop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
