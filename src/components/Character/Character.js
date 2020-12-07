import React from 'react';
import classes from './Character.module.css';

import { characters, elements, weaponTypes } from '../store';

const Character = ({ data }) => {
    let el = data.name == "Traveler" ? data.element : characters[data.name].element;
    return (
        <div className={classes.Character}>
            <div className={classes.imgContainer}>
                <img src={characters[data.name].img} alt={data.name}></img>
            </div>
            <div className={classes.info}>
                <div className={classes.meta}>
                    <div>{data.name}</div>
                    <img src={elements[el].img} alt={el} ></img>
                    <img src={weaponTypes[characters[data.name].weapon]} alt={characters[data.name].weapon}></img>
                </div>
                <div>{data.ascension}</div>
                <div>Level {data.level}</div>
            </div>
        </div>
    )
}

export default Character;