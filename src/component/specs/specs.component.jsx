import React from 'react';
import './specs.style.css'
import Button from '../button/button.component';
import FormInput from '../form.input/form.input.component';

const Spec = ({handleSubmit, handleChange, rows, cols}) => {
    return (
        <div>
            <form className="Specs" onSubmit={handleSubmit}>
                <FormInput 
                type="number"
                label='Rows'
                name='rows'
                value = {rows}
                onChange ={handleChange}
                required
                max= {7}
                min = {4}
                 />
                <FormInput 
                type="number"
                label = "Columns"
                name='cols'
                value = {cols}
                onChange ={handleChange}
                required
                max = {7}
                min = {4}
                 />
                <Button type="submit">Start Game</Button>
            </form>
        </div>
    );
}

export default Spec;
