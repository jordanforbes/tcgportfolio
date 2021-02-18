import React from 'react';

const CardPortrait = (props)=> {
    return (<img src={props.imgSrc} 
            className="cardPortrait"
            alt="Bernie"
        />);
}

const Card =(props)=>{
    const check=()=>{
        console.log("clicked")
        // changeBigImg()
        
    }
    return (
        <div 
            className="card"
            onClick={check}
        >
            <CardPortrait imgSrc={props.imgSrc}/>
        </div>
    )
}

export default Card