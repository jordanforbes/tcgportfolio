import React, { useState } from 'react';

// const [bigImg, setBigImg] = useState(0);


const Inspect = (props) =>{
    return(
        <div>
            <div className="inspect">
                <img 
                    className="inspectPortrait" 
                    src={props.imgSrc} 
                    alt="big image"
                />
            </div>
        </div>
    )
}

export default Inspect