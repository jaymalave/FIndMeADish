import './App.css';
import React, {useState} from "react";
import Recipe from './components/Recipe'
require('dotenv').config()

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const x = process.env.API_ID
  const y = process.env.API_KEY


  const searchHandler = e => {
      setSearch(e.target.value)
  }

  const queryHandler = () => {
        setQuery(search)
        getRecipes()
  }
  

   const getRecipes = async () => {
   
     const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${x}&app_key=${y}`);
     const data = await response.json();
     setRecipes(data.hits);
     console.log(recipes);
   }
 

  return (
    <div className="App">
      <h1>Alexa, Find Me A Dish</h1>
    
      <input type = 'text' onChange = {searchHandler} className = 'search-box'/>
      <button onClick = {queryHandler} className = 'search-button'>Search</button>
      <div className = 'recipe-list'>
      {recipes.map(recipe => (
        <Recipe 
           key = {recipe.recipe.label}
           title = {recipe.recipe.label}
           calories = {recipe.recipe.calories}
           image = {recipe.recipe.image}
        />
      ))}
      </div>
      
    
    </div>
  );
}

export default App;
