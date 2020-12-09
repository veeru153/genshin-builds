import React from 'react';

import classes from './Radio.module.css';

const Radio = ({ id, name, value, selection, clicked }) => {
    return (
        <div className={classes.Radio}>
            <input 
                type="radio" 
                id={id} 
                name="character" 
                value={value} 
                checked={selection}
                onClick={clicked}
                onChange={() => console.log(value)}
            ></input>
            <label htmlFor={value}>{value}</label>
        </div>
    )
}

export default Radio;