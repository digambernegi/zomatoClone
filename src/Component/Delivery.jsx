import React from 'react'
import Filter from './Filter'
import TopBrand from './TopBrand' 
import Explore from './Explore'
import Slider from "react-slick";
import NextArrow from './carousel/NextArrow'
import PrevArrow from './carousel/PrevArrow'          
import FoodCollection from './FoodCollection'
import {api} from '../ApiData/data'
import '../style/delivery.css'


const foodCollections=[{

    id:1,
    image:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
    title:'Pizza',
},
{

    id:2,
    image:'https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png',
    title:'Chaat',
},
{

    id:3,
    image:'	https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
    title:'Burger',
}
,
{

    id:4,
    image:'	https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png',
    title:'Sandwich',
},
{

    id:5,
    image:'	https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png',
    title:'Momos',
}
,
{

    id:6,
    image:'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',
    title:'Cake',
},
{

    id:7,
    image:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
    title:'Chiken',
}
,
{

    id:8,
    image:'https://b.zmtcdn.com/data/o2_assets/fddced2a65613b6882866082e92b8d0a1632716695.png',
    title:'Bakarwadi',
},
{
    
    id:9,
    image:'	https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
    title:'Rolls',
}
,
{

    id:10,
    image:'https://b.zmtcdn.com/data/dish_images/39dc79488ecea875704469c2a89c5e521603257786.png',
    title:'Mastani',
},
{

    id:11,
    image:'	https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png',
    title:'Fries',
}
,
{

    id:12,
    image:'https://b.zmtcdn.com/data/dish_images/2a24c5264606bd78622267d28a3726821634805216.png',
    title:'Biryani',
}]

//react slick-slider - installed
const settings={
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
};

const Delivery = () => {
    const apiList=api;
    return (
        <>
        <Filter/>
        <div className="deliveryScreen">
        <div className="title">Eat what makes you happy</div>
        <div className="collections">
        <Slider {...settings}>
            {
            foodCollections.map(food =>{
                return(
                <FoodCollection food={food}/>
                 )})
            }
        </Slider>
        </div>
        </div>

        <div className="brand">
        <TopBrand/>
        </div>
        <div className="explore">
        <Explore data={apiList} title='East Street Restaurants, Pune'/>
        </div>
        </>
    )
}

export default Delivery
