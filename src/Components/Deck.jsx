import React from 'react';
import Card from './Card';
import bern from '../Assets/Bernie.jpg';
import armjet from '../Assets/armjet.jpg';

const imgPaths = {
    bernie: bern,
    armjet: armjet
}

const Deck = () => {
    return(
        <div className="deck">
            <Card 
                imgSrc={imgPaths.bernie}
            />
            <Card imgSrc={imgPaths.armjet}/>
        </div>   
    )
}

export default Deck;