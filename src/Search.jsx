import React, { useState } from 'react';
import Sresult from './Sresult.jsx';

const Search = () => {

    const [img, setImg] = useState('');
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    };
    
    return (
        <>
            <div className="searchbar">
                <h1>Hello, Search page.</h1>
                <input
                    type="text"
                    placeholder="Search here"
                    value={img}
                    onChange={inputEvent} 
                />
                { img === "" ? null : <Sresult name={img}/> }
            </div>
        </>
    );
}
export default Search;