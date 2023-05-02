import React from "react";

const ChefSection = ({ chefs }) => {
  console.log(chefs);
  const { id, chef_picture, chef_name, years_of_experience, num_of_recipes, likes } = chefs;
  return (
    <div>
      <div className="card w-full border bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
          <img src={chef_picture} alt="chef_picture" className="rounded-xl border" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{chef_name}</h2>
          <p className="text-details ">
            Years of experience: <span className="text-g">{years_of_experience}</span>
          </p>
          <p className="text-details ">
            Numbers of recipes: <span className="text-g">{num_of_recipes}</span>
          </p>
          <p className="text-details text-g">likes: {likes}</p>
          <div className="card-actions">
            <button type="button" className="btn btn-primary">
              View Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
