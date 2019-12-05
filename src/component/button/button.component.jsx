import React from 'react';
import './button.style.css'

const Button = ({children,click, ...otherProps}) => {
    return (
        <div>
            <button
            onClick = {click && click}
            {...otherProps}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;
