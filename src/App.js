import { useState, useEffect } from 'react';

import "./App.css";
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'fee0e8fd';
  const APP_KEY = 'c1170962fc004148ae80c6faad927484';

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

  return (
    <>
      <div className="app">
        <h1 className="mainTitle">Recipes Search</h1>
        <form className="search-form" onSubmit={getSearch}>
          <input type="text" className="search-text" value={search} onChange={updateSearch} placeholder="Type here" />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="recipes">
          {recipe.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
