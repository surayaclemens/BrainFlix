import React from 'react';
import './Header.scss'

function Header(){
    // write function stuff in here
    
    // in the return is where your jsx/html type stuff goes
        return (
        
            <header className="header">
                <img className="header__logo" src="" alt="brainflix logo"/>
                <input className="header__searchbar" name="search" type="search" id="search" placeholder="search"></input>
                <a><img className="header__upload-button" src='' alt='upload button'/></a>
                <img className='header__user-avatar' src='' alt='user avatar'/>
            </header>
          
        )
    
}


export default Header;
