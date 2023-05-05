import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes";

const ViewRecipes = () => {
  const viewRecipes = useLoaderData();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (viewRecipes) {
      setLoading(false);
    }
  }, [viewRecipes]);
  const { chef_picture, chef_name, bio, likes, num_of_recipes, years_of_experience, recipes } = viewRecipes;
  return (
    <div>
      {loading ? (
        <div className="flex justify-center  items-center">
          <progress className="progress w-56 " />;
        </div>
      ) : (
        <div className="px-4 py-16 md:px-24 lg:px-32 lg:py-20 ">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="border lg:w-2/4">
              <img className=" object-cover" src={chef_picture} alt="Album" />
            </figure>
            <div className="card-body space-y-2 mt-4 lg:w-2/5">
              <h2 className="card-title text-zinc-600 ">{chef_name}</h2>
              <p className="text-lg font-medium text-zinc-500">Biography: {bio}</p>
              <p className="text-details text-g inline-flex gap-2 items-center">
                <BiLike /> <span>{likes}</span>
              </p>
              <p className="text-details text-lg ">
                Numbers of recipes: <span>{num_of_recipes}</span>
              </p>
              <p className="text-details">
                Years of experience: <span>{years_of_experience}</span>
              </p>
            </div>
          </div>
          <h2 className="chef-title mt-20">Most Popular Recipe</h2>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {recipes.map((recipe, idx) => (
              <Recipes key={idx} recipe={recipe} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewRecipes;
