import React from 'react'
import '../style/dinout.css';
import Slider from "react-slick";
import NextArrow from './carousel/NextArrow'
import PrevArrow from './carousel/PrevArrow'
import {dineoutdata} from '../ApiData/dineoutdata'
import Explore from './Explore'
import { HiAdjustments,HiSwitchVertical,HiChevronDown } from "react-icons/hi";



const dineoutfilter=[{
    id:1,
    icon:<HiAdjustments className="filtericon"/>,
    title:'Filters',
},
{
    id:2,
    icon:<HiSwitchVertical className="filtericon"/>,
    title:'Distance',
},
{
    id:3,
    title:'Rating: 4.0 +',
},
{
    id:4,
    title:'Online bookings',
},
{
    id:5,
    icon:<HiChevronDown className="filtericon"/>,
    title:'Cuisines',
},
{
    id:6,
    icon:<HiChevronDown className="filtericon"/>,
    title:'Pro Offers',
},
{
    id:7,
    title:'Outdoor Seating',
},
{
    id:8,
    title:'Serves Alcohol',
},
{
    id:9,
    title:'Pure Veg',
},
{
    id:10,
    title:'Open Now',
},
{
    id:11,
    icon:<HiChevronDown className="filtericon"/>,
    title:'More Filter',
},
{
    id:12,
    title:'Cafes',
}];

const dineout=[{
    id:1,
    title:'Newly opened',
    image:'https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015782.jpg',
    places:'29 Places'
},
{
    id:2,
    title:'Trending This Week',
    image:'https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735742.png',
    places:'30 Places'
},{
    id:3,
    title:'Best of Pune',
    image:'https://b.zmtcdn.com/data/collections/eb69f5f6e70ac43c8c0923fef39fabaf_1535615947.jpg',
    places:'88 Places'
},{
    id:4,
    title:'Work Friendly Places!',
    image:'https://b.zmtcdn.com/data/collections/332d70c0ff0894191d1661739ce18fbd_1605194226.jpg',
    places:'26 Places'
},{
    id:5,
    title:'Sunday Brunches',
    image:'https://b.zmtcdn.com/data/collections/16aa00197f90fcf760577695444583c8_1551076991.jpg',
    places:'17 Places'
},{
    id:6,
    title:'Outdoor Seating',
    image:'https://b.zmtcdn.com/data/collections/9bbfe4d4a19b26430fa930295ec88bc5_1615975717.jpg',
    places:'28 Places'
},{
    id:7,
    title:'Live Sports Screenings',
    image:'https://b.zmtcdn.com/data/collections/1b959f49d1a130f16edd619de439eaba_1634888082.png',
    places:'39 Places'
},{
    id:8,
    title:'Veggie Friendly',
    image:'https://b.zmtcdn.com/data/collections/2e5c5dc79d4b465797c8e425d814f42c_1582256432.jpg',
    places:'15 Places'
}];


const settings={
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
};
const DineOut = () => {
    const dineoutapi=dineoutdata;
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
            dineoutfilter.map(filter=>{
         return(
             <div className="filter__itmes">
             <button className="btn"><span>{filter.icon}</span>{filter.title}</button>
             </div>
     )})
 }
     </div>
     <Explore data={dineoutapi} title='Dine-Out Restaurants in East Street'/>
        </div>
    )
}

export default DineOut
