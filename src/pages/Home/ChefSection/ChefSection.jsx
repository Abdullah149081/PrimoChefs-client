import React from "react";
import { Link } from "react-router-dom";

const ChefSection = ({ chefs }) => {
  const { id, chef_picture, chef_name, years_of_experience, num_of_recipes, likes } = chefs;
  return (
    <div>
      <div className="card w-full  bg-base-100 rounded-lg border">
        <figure className="">
          <img src={chef_picture} alt="chef_picture" className="rounded-xl " />
        </figure>
        <div className="card-body space-y-4 ">
          <h2 className="card-title text-[#757575]">{chef_name}</h2>
          <p className="text-details">
            Years of experience: <span>{years_of_experience}</span>
          </p>
          <p className="text-details text-lg ">
            Numbers of recipes: <span>{num_of_recipes}</span>
          </p>
          <p className="text-details text-g">likes: {likes}</p>
          <div className="card-actions">
            <Link to={`/view-Recipes/${id}`}>
              <button type="button" className="btn btn-primary">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
