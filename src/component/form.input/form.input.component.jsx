import React from 'react';
import './form.input.style.css'

const FormInput = ({onChange, label, value, ...otherProps}) => {
    return (
        <div className="FormGroup">
             {label && (
        <label
                className={value && "shrink"}
        >
            {label}
        </label>
        )}
            <input
            className="Input"
            {...otherProps}
            onChange ={onChange}
            />
       
            
        </div>
    );
}

export default FormInput;
