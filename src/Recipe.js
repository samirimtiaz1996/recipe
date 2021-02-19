import React from 'react';
import style from './recipe.module.css';

const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt=""/>
            <ol>
                {ingredients.map((ingredient,index)=>(
                    <li key={index}>
                    <div>Ingredient Name: {ingredient.text}</div>  
                    <div>Weight: {ingredient.weight}</div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;