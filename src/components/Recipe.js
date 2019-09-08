import React from "react";

const Recipe = ({ title, image, ingredient }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
      <ol>
        {ingredient.map(ingre => (
          <li>{ingre.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default Recipe;
