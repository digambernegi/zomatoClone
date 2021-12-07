import React from 'react'
import '../style/Filter.css'
import { HiAdjustments,HiSwitchVertical,HiChevronDown } from "react-icons/hi";


const filters=[{
    id:1,
    icon:<HiAdjustments className="filtericon"/>,
    title:'Filters',
},
{
    id:2,
    icon:<HiSwitchVertical className="filtericon"/>,
    title:'Delivery Time',
},
{
    id:3,
    title:'Rating: 4.0',
},
{
    id:4,
    title:'Great Offers',
},
{
    id:5,
    icon:<HiChevronDown className="filtericon"/>,
    title:'Cuisines',
},
{
    id:6,
    title:'Pure Veg',
}];

const Filter = () => {
    return (
        <>
        <div className="filter common__width">
            {
     filters.map(filter=>{
         return(
             <div className="filter__itmes">
             <button className="btn">{filter.icon}{filter.title}</button>
             </div>
     )})
 }
     </div>
    </>
    )}

export default Filter
