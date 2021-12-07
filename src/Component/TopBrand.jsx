import React from 'react'
import Slider from "react-slick";
import NextArrow from './carousel/NextArrow'
import PrevArrow from './carousel/PrevArrow'
import '../style/topbrands.css';

const Topbrand=[{
    id:1,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png?output-format=webp',
    time:'40 min',
},
{
    id:2,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990893.png?output-format=webp',
    time:'35 min',
},
{
    id:3,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png?output-format=webp',
    time:'49 min',
},
{
    id:4,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp',
    time:'44 min',
},
{
    id:5,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png?output-format=webp',
    time:'51 min',
},
{
    id:6,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/82b5b6321860545a160e790d99ec6da3_1629438503.png?output-format=webp',
    time:'45 min',
},
{
    id:7,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179363.png?output-format=webp',
    time:'38 min',
},
{
    id:8,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/7c048d2ec413aaca136a33c3e9628c0e_1629952759.png?output-format=webp',
    time:'36 min',
},
{
    id:9,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/47c22bbd5043ef52b80a4e3d3409a368_1626810701.png?output-format=webp',
    time:'38 min',
},
{
    id:10,
    image:'https://b.zmtcdn.com/data/brand_creatives/logos/2d041d7d13a7bda9782ccf04f75291ff_1626117204.png?output-format=webp',
    time:'34 min',
}]

const settings={
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
};
const TopBrand = () => {
    return (

        <div className="brands common__width">
        <div className="title">Top brands for you</div>
        <Slider {...settings}>
            {
            Topbrand.map(brand =>{
                return(
                    <>
                 <div className="brand__image">
                  <img className="img" src={brand.image} alt={brand.time} />   
                 </div>   

                 <div className="brand__time">
                  {brand.time}   
                 </div>
                 </>
                )
            })
            }

        </Slider>

        </div>
    )
}

export default TopBrand
