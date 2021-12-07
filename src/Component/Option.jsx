import React from 'react'
import '../style/Option.css'

const items=[{
   id:1,
   name:'Delivery',
   activeimg:'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png',
   inactiveimg:'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
   bg:'#FCEEC0',

},{
   id:2,
   name:'DiningOut',
   activeimg:'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
   inactiveimg:'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
   bg:'#FCEEC0',

},
{
   id:3,
   name:'Nightlife',
   activeimg:'	https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
   inactiveimg:'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
   bg:'#FCEEC0',

}]
const Option = ({currentPage,setCurrentPage}) => {
    console.log(currentPage)
   return (
       <div className="wrapper">
        <div className="options common__width">
        {
            items.map(item =>{
            return(
            <div key={item.id}
            onClick={() => setCurrentPage(item.name)}
            className={`tab-item center ${currentPage===item.name && 'active-tab'}`}
            >
            
            <div className="tab-image center"
            style={{
                backgroundColor:`${currentPage===item.name? item.bg:''}`,    
            }}
            >
                <img 
                className='tab-img'
                src={currentPage===item.name? item.activeimg : item.inactiveimg} 
                alt={item.name} />
                <div className="tab-name">{item.name}</div>
            </div>
            </div>
            
            )})
        }

</div>
</div>    
    );
}

export default Option
