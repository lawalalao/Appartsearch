import React, {useState} from "react";
import "./Banner.css";
import { Button} from "@material-ui/core";
import Search from './Search';
import {useHistory } from 'react-router-dom' ;


function Banner () {
            const history = useHistory();

            const [showSearch, setShowSearch] = useState (false);
    return (

    
        <div className="banner"> 
            <div className="banner__search">
                
                {showSearch && <Search />}


                <Button onClick={() => 
                    setShowSearch(!showSearch)}
                    className="banner__searchButton"
                    variant='outlined'>
                    {showSearch ? "cacher": "Rechercher Date"}
                </Button>
            </div>
            <div className="banner__info">
                <h1> Le dépaysement à deux pas de chez vous</h1>
                <h5>Trouvez votre nouveau chez vous. Découvrez des logements à proximité pour vous installer, travailler, ou tout simplement vous détendre. </h5>

                <Button onClick={() => history.push('/search')}
                variant="outlined"> Explorez les alentours
                </Button>

            </div>
        
        </div>
    )
}

export default Banner