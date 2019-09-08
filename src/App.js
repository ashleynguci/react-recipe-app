import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";
import { async } from "q";

const App = () => {
  const APP_ID = "11630471";
  const APP_KEY = "70d6f103a466772ea21c1a9d88c17b46";

  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };
  //If you want to run only first time, leave it empty []
  //If you want to run whenever the argument changes, put arg inside [arg]

  const updateSearch = e => {
    setInput(e.target.value);
  };

  const getInput = e => {
    e.preventDefault();
    setQuery(input);
    setInput("");
    //Set search back to empty string
  };
  //combo for input value, onChange with function
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={getInput} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={input}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipe.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredient={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
