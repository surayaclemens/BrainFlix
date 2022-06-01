import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import mainLogo from "../../../src/assets/images/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

function Header(){
        return (
            <header className="header">
                <Link to="/" className='header__logo-link'> <img className="header__logo" src={mainLogo} alt="brainflix logo"/></Link>
                    <input className="header__searchbar" name="search" type="search" id="search" placeholder="Search"></input>
                <Link to ="/upload" className="header__upload-link"><button className="header__upload-button">Upload</button></Link>
                <img className='header__user-avatar' src={userAvatar} alt='user avatar'/>
            </header>
        )  
}

export default Header;
