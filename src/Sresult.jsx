import React, { useState } from 'react';

const Sresult = (props) => {

    const img1 = `https://source.unsplash.com/400x300/?${props.name}`;
    
    return (
        <>  
            <div>
                <img src={img1} alt="search"/>
            </div>
        </>
    );
}
export default Sresult;