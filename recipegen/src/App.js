import './App.css';
import React, {useState} from "react";
import Recipe from './components/Recipe'
require('dotenv/config')

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const API_ID = '3ab45232'
  const API_KEY = '273b1557ec3ed737313eae0acf35167c'

  const searchHandler = e => {
      setSearch(e.target.value)
  }

  const queryHandler = () => {
        setQuery(search)
        getRecipes()
  }
  

   const getRecipes = async () => {
   
     const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`);
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
