import React from 'react';
import image from '../Assets/Bernie.jpg';

const CardPortrait = ()=> {
    return (<img src={image} 
            className="cardPortrait"
            alt="Bernie"
        />);
}

const Card =()=>{
    return (<div className="card">
        <CardPortrait />
    </div>)
}

export default Card