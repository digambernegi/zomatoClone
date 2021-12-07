import React from 'react'
import Slider from "react-slick";
import NextArrow from './carousel/NextArrow'
import PrevArrow from './carousel/PrevArrow'
import Explore from './Explore'
import {nightlifedata} from '../ApiData/nightlifedata'
import { HiAdjustments,HiSwitchVertical,HiChevronDown } from "react-icons/hi";

const dineout=[{
    id:1,
    title:'Best Bars & Pubs',
    image:'https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg?output-format=webp',
    places:'22 Places'
},
{
    id:2,
    title:'Artisan Cocktails',
    image:'https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg?output-format=webp',
    places:'29 Places'
},{
    id:3,
    title:'Happy Hours',
    image:'https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg?output-format=webp',
    places:'7 Places'
},{
    id:4,
    title:'Bear is a Bar',
    image:'https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp',
    places:'10 Places'
}];

const nightlifefilter=[{
    id:1,
    icon:<HiAdjustments className="filtericon"/>,
    title:'Filters',
},
{
    id:2,
    icon:<HiChevronDown className="filtericon"/>,
    title:'Pro Offers',
},
{
    id:3,
    icon:<HiSwitchVertical className="filtericon"/>,
    title:'Pro Offers',
},
{
    id:4,
    title:'Rating: 4.0+',
},
{
    id:5,
    title:'Pubs & Bars',
}];

const settings={
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
};

const NightLife = () => {
    const nightlifeapi=nightlifedata;
    return (
        
        <div className="dineoutpage">  
        <div className="dineout ">
            <div className="dineout__title">Collections</div>
            <span className="dineout__subtitle">Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</span>
            <div className="dineoutcollection">
        <Slider {...settings}>
            {
            dineout.map(food =>{
                return(
                    <div className="dineout__image">
                    <img src={food.image} alt={food.title} />
                    <div className="gradient"></div>
                    <div className="dine__title">{food.title}</div>
                    <div className="dine__subtitle">{food.places}</div>
                    </div>
                )
            })
            }
        </Slider>
            </div>
            </div>
        
            <div className="dineoutfilter common__width">
            {
            nightlifefilter.map(filter=>{
         return(
             <div className="filter__itmes">
             <button className="btn"><span>{filter.icon}</span>{filter.title}</button>
             </div>
     )})
 }
     </div>     <Explore data={nightlifeapi} title='Dine-Out Restaurants in East Street'/>
            </div>
    )
}

export default NightLife
