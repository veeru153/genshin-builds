import React from 'react';
import classes from './TextInput.module.css';

const TextInput = ({ value, onChange }) => {
    return (
        <input 
            type="text" 
            className={classes.TextInput}
            value={value}
        ></input>
    )
}

export default TextInput;