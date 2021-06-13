import React from "react";
import './Recipe.css'
const Recipe = (props) => {
    return (
        <div className = 'card'>
      <h2>{props.title}</h2>
      <p>{props.calories}</p>
      <img src = {props.image} alt = ""/>
      </div>
    );
}
export default Recipe