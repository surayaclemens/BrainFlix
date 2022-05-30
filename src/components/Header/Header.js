import React from 'react';
import './Header.scss'
import mainLogo from "../../../src/assets/images/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

function Header(){
        return (
            <header className="header">
                <img className="header__logo" src={mainLogo} alt="brainflix logo"/>
                    <input className="header__searchbar" name="search" type="search" id="search" placeholder="Search"></input>
                <button className="header__upload-button">Upload</button>
                <img className='header__user-avatar' src={userAvatar} alt='user avatar'/>
            </header>
        )  
}

export default Header;
