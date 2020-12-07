import React from 'react';
import classes from './Artifact.module.css';

import { flower, feather, clock, goblet, circlet } from '../store/artifacts';
import { parseStat } from '../util';

const Artifact = ({ data, type }) => {
    let list = {};
    switch(type) {
        case "flower":
            list = flower;
            break;
        case "plume":
            list = feather;
            break;
        case "sands":
            list = clock;
            break;
        case "goblet":
            list = goblet;
            break;
        case "circlet":
            list = circlet;
            break;
        default:
            break;
    }

    return (
        <div className={classes.Artifact}>
            <div className={classes.info}>
                <div className={classes.imgContainer}>
                    <img src={list[data.set].img}></img>
                </div>
                <div className={classes.name}>{list[data.set].name}</div>
            </div>
            <div className={classes.stats}>
                <div className={classes.statGroup}>
                    <div>Meta</div>
                    <div className={classes.statRow}>
                        <div>{data.stars}</div>
                        <div>{`Level: ${data.level}`}</div>
                    </div>
                </div>
                
                <div className={classes.statGroup}>
                    <div>Main Stats</div>
                    {parseStat(data.main, classes.statRow)}
                </div>

                <div className={classes.statGroup}>
                    <div>Sub Stats</div>
                    {data.sub.map(pair => parseStat(pair, classes.statRow))}
                </div>

            </div>
        </div>
    )
}

export default Artifact;