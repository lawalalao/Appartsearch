import React from 'react';
import './Acceuil.css';
import Card from "./Card";
import Banner from './Banner'

function Acceuil(){
    return (
        <div className='acceuil'>
            <Banner />
            <div className="acceuil__section">
                <Card 
                    src="https://i0.wp.com/www.maisonsclairlogis.fr/wp-content/uploads/para2.jpg?fit=700%2C400&ssl=1"
                    title="cotonou"
                    description="une belle maison situe au bord de la route hdjkbsuhdfmlohsdfklnfkihmlovhdsm gjsjbjgdkldofhrjknhvdkjbvjkbdugdjkf "
                    price= "50000fcfa/mois"
                />
                <Card 
                    src="https://www.polimmolamaison.bzh/wp-content/uploads/2018/06/cantate-nl-1-770x540.jpg"
                    title="cotonou"
                    description="une belle maison situe au bord de la route "
                />
                <Card
                    src="https://www.depreux-construction.com/wp-content/uploads/2020/03/LE-PAVOUX-2.jpg"
                    title="cotonou"
                    description="une belle maison situe au bord de la route "
                />
            </div>
             <div className="acceuil__section">
                <Card
                    src="https://www.depreux-construction.com/wp-content/uploads/2017/07/maison-moderne-plain-pied.jpg"
                    title="cotonou"
                    description="une belle maison situe au bord de la route "
                />
                <Card
                    src="https://i.pinimg.com/originals/3a/71/41/3a7141f78d42aa00aa2dd140fd83054a.jpg"
                    title="cotonou"
                    description="une belle maison situe au bord de la route "
                />
                <Card
                    src="https://previews.123rf.com/images/piovesempre/piovesempre1502/piovesempre150200148/36195443-villa-moderne-avec-piscine-sc%C3%A8ne-de-nuit.jpg"
                    title="cotonou"
                    description="une belle maison situe au bord de la route "
                />
            </div>
        </div>
    )
}

export default Acceuil;