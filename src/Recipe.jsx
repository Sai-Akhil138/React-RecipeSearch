import React from 'react'

const Recipe = ({title, calories, image,ingredients}) => {
    return (
        <div className="recipe">
            <h1 className="recipe-title">Title : {title}</h1>
            <img src={image} alt="" className="recipe-img" />
            <ol>
                <p className="list-title">Required Ingredients</p>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <div className="extra-topics">
            <p className="recipe-calories">Calories : {calories}</p>
            </div>
        </div>
    )
}

export default Recipe
