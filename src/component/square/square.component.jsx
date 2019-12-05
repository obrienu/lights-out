import React from 'react';
import './square.style.css'

const Square = (props) => {

const handleClick = ()=>{
    props.clicked(props)
}

    return (
        <div onClick={handleClick} className={`Square ${props.isOn ? "On" : "Off" }`}>
            
        </div>
    );
}

export default Square;
