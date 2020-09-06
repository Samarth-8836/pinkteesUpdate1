import React from 'react';

const ColorSize = () => {
    return (
        <div className='colorSizeContainer'>
            <button style={{width: '50%', height: '60px'}}>Colour</button>
            <button style={{width: '50%', height: '60px'}}>Size</button>
            <button style={{width: '100%', height: '60px', margin: '7px 0px', backgroundColor: '#009280', color: 'white', fontSize: '20px', border: 'none'}}>Order Now</button>
        </div>
    );
}

export default ColorSize;