import React from 'react'
import '../style/FoodCollection.css'

const FoodCollection = ({food}) => {
    return (
        <>
         <div className="foodItems">
        <img className="foodItems__img" src={food.image} alt={food.title} />
         </div>  
         <div className="foodItems__title">
        {food.title}
        </div>
        </>
    )
}

export default FoodCollection
