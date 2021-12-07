import React from 'react'
import '../style/card.css'
import { IoMdStar } from "react-icons/io";

const Cards = ({apidata}) => {
const name=apidata?.info?.name?? '';
const image=apidata?.info.image?.url;
const deliverytime=apidata?.order?.deliveryTime;
const ratings=apidata?.info?.rating?.rating_text;
const price=apidata?.info?.cfo?.text;
const offers=apidata?.bulkOffers?? [];
const cuisines=apidata?.info?.cuisine?.map((item) => item.name).slice(0,3);

const bottomcontainers=apidata?.bottomContainers;
const goldOff=apidata?.gold?.text;
const proOff=offers.length >1 ?offers[0].text : null;
const discount=offers.length >1 ? offers[1].text : offers.length===1?offers[0].text : null;
    return (
          <div className="explore__card">
          <div className="explore__image">
            <img className="img" src={image} alt={name} />
            <div className="explore__time">{deliverytime}</div>
            {proOff && <div className="pro-Off">{proOff}</div>}
            {goldOff && <div className="gold-Off">{goldOff}</div>}
            {discount && <div className="discount">{discount}</div>}
            
              </div>  

              <div className="explore__row">
                <div className="explore__title">{name}</div>
                {ratings && <div className="explore__rating">{ratings} <IoMdStar className="staricon"/> </div>} 
                </div>  
    

                <div className="explore__row">
                {cuisines.length && <div className="explore__cuisines">{cuisines.map((item,i) =>{
                    return <span className='cuisines'>{item}{i!==cuisines.length-1 && ','}</span>
                })}
                </div>}    
                {price && <div className="explore__price">{price}</div>}
                </div>
                {bottomcontainers.length>0 && (
                    <div>
                       <div className="cardseperator"></div>
                       <div className="explore__bottom">
                        <img src={bottomcontainers[0]?.image?.url} alt={bottomcontainers[0].text}
                        style={{height:'15px'}} />
                        <div className="bottom__text">{bottomcontainers[0].text}</div>
                        </div> 
                    </div>
                )}
          </div>  

    )
}

export default Cards
