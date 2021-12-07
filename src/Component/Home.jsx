import React,{useState} from 'react'
import Header from "./Header"
import Option from "./Option"
import Footer from "./Footer"
import Delivery from "./Delivery"
import DineOut from "./DineOut"
import NightLife from "./NightLife"


const Home = () => {
    const[currentPage,setCurrentPage]=useState('Delivery');
    return (
        <div>
            <Header/>
            <Option currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {getPage(currentPage)}
            <Footer/>
        </div>
    )
}
const getPage = (tab)=>{
    switch(tab){
    case 'Delivery': return <div><Delivery/></div>
    case 'DiningOut': return <div><DineOut/></div>
    case 'Nightlife': return <div><NightLife/></div>
    default: return <div><Delivery/></div>
}
}

export default Home
