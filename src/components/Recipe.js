import React from "react";
import css from "../style/recipe.module.css";
const Recipe = ({ title, image, ingredient }) => {
  return (
    <div className={css.recipe}>
      <h1>{title}</h1>
      <img className={css.image} src={image} />
      <ol>
        {ingredient.map(ingre => (
          <li>{ingre.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default Recipe;
