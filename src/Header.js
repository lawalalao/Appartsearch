import React from 'react';
import {Link} from "react-router-dom"

import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


function Header() {
    return(
        <div className="header">
            <Link to='/'>

                
                <img 
                    className='header__icon'
                    src={require("./image/logo.png")}
                    alt='logo'
                />
            </Link>
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>
            
            <div className='header__right'>
                <p>become a host </p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountBoxIcon />
            </div>
            
        </div>


    )
}

export default Header 