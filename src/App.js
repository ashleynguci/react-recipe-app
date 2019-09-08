import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const APP_ID = "11630471";
  const APP_KEY = "70d6f103a466772ea21c1a9d88c17b46";
  const linkRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log("Effect has been used");
  });
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default App;
