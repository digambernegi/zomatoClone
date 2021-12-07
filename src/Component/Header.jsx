import React from 'react'
import '../style/Header.css'
import { HiOutlineLocationMarker,HiOutlineSearch,HiChevronDown } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    return (
      <div class="header common__width">
      <img className='header__logo' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png
        " alt="logo" />  

        <div className="header__right">
        <div className="header__location">
        <div className="location__wrapper">
        <div className="icon">
        <HiOutlineLocationMarker className="headericon"/>
        <div className="header__inputtext">Pune</div>
        </div>

        <IoMdArrowDropdown className='headerdownicon'/>
        </div>
        <div className="headerseperator"></div>
        <div className="header__search">
        <HiOutlineSearch className="headersearchicon"/> 
        <input className="searchbar header__inputtext" type="text" placeholder="Search for restaurant, cuisine or a dish" />
        </div>
        </div>

        <div className="header__user">
        <img className="user" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png" alt="" />
        <span className="username">Dsn</span>
        <HiChevronDown className="downarrowicon"/>
        </div>

      
      </div>
      </div>
      
    )
}

export default Header
