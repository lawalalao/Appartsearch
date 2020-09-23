import  React  from "react";
import './SearchPage.css';
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage(){
    return(
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>12 appartements- 12 aout a 30 aout- 2 visiteurs</p>
                <h1>restez aux alentours</h1>
                <Button variant='outlined'>Annulation   </Button>

                <Button variant='outlined'>Type appartement   </Button>
             

                <Button variant='outlined'>prix   </Button>
             

                <Button variant='outlined'>chambre et salon  </Button>
             

                <Button variant='outlined'>Plus   </Button>
             
             
                
            </div>


            <SearchResult
                img="https://i.ytimg.com/vi/R7EUNid4LpQ/maxresdefault.jpg"
                location="haie vive"

                title="Stay at this spacious klsh;knlkk"

                description="vhsaksnkDGNKBJKKBSGSNKGSKVHKSDVFKSGKSDK"

                star={4.78}
                price="60000fcfa/mois"
                total="1245542005 total"
            />

            

            <SearchResult
                img="https://moderne-house.fr/wp-content/uploads/2017/02/photo-maison-moderne-dreamstimemedium_27558576.jpg"
                location="haie vive"

                title="Stay at this spacious klsh;knlkk"

                description="vhsaksnkDGNKBJKKBSGSNKGSKVHKSDVFKSGKSDK"

                star={4.78}
                price="60000fcfa/mois"
                total="1245542005 total"
            />

            

            <SearchResult
                img="https://i.pinimg.com/originals/93/66/6f/93666f840195becf4331c45b84f99625.jpg"
                location="haie vive"

                title="Stay at this spacious klsh;knlkk"

                description="vhsaksnkDGNKBJKKBSGSNKGSKVHKSDVFKSGKSDK"

                star={4.78}
                price="60000fcfa/mois"
                total="1245542005 total"
            />
        </div>


    )
}

export default SearchPage