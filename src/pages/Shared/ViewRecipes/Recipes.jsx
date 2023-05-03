import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";

const Recipes = ({ recipe }) => {
  const [disable, setDisable] = useState(false);
  const { name, ingredients, cooking_method, rating } = recipe;

  const handlerFavorite = () => {
    setDisable(true);
    toast.success("favorite added");
  };

  return (
    <div>
      <div className="card border w-full h-full bg-base-100 hover:shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button onClick={handlerFavorite} disabled={disable} type="button" className="fa btn">
              <FaRegStar className="w-5 h-5 " />
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-details">{name}</p>
            <ol>
              <p className="mb-2 card-title text-zinc-600"> ingredients:</p>
              {ingredients.map((ingredient, idx) => (
                <li className="font-medium text-gray-700" key={idx}>
                  {ingredient}
                </li>
              ))}
            </ol>
            <p className="text-lg font-medium text-slate-700">Cooking Method : {cooking_method}</p>
            <p className="text-details">Rating : {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
