import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';


function App() {

  const YOUR_APP_KEY="8552f02ce5b86c849f1668b3a5d2cfd3";
  const YOUR_APP_ID="8c012c7e";
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("");
  const request=
  `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`



  useEffect(()=>{
    getRecipes();
    // eslint-disable-next-line
  },[query]);


  const getRecipes=async()=>{
    const response=await fetch(request);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch=e=>{
    setSearch(e.target.value);
  }

  const runQuery=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={runQuery} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        ingredients={recipe.recipe.ingredients}
        image={recipe.recipe.image}/>
      ))}
      </div>
    </div>
  );
}

export default App;
