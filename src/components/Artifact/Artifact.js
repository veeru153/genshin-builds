import React from 'react';
import classes from './Artifact.module.css';

import { flower, feather, clock, goblet, circlet } from '../store/artifacts';
import { stars } from '../store';
import { parseStat } from '../util';

const Artifact = ({ data, type }) => {
    let list = {};
    switch (type) {
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
            <div
                className={classes.info}
                style={{ backgroundColor: getBgColor(data.stars) }}
            >
                <div className={classes.imgContainer}>
                    <img src={list[data.set].img} alt={list[data.set].name}></img>
                </div>
                <div className={classes.name}>{list[data.set].name}</div>
            </div>
            {data.set === "none" ?
                <div className={classes.noStats}>
                    No Artifact of this Category was added to the Build
                </div> :
                <div className={classes.stats}>
                    <div className={classes.statGroup}>
                        <div>Meta</div>
                        <div className={classes.statRow}>
                            <div>
                                <img src={stars[data.stars]} alt={data.stars}></img>
                            </div>
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
            }
        </div>
    )
}

const getBgColor = (stars) => {
    switch (stars) {
        case 3: return "#576c90";
        case 4: return "#685f94";
        case 5: return "#9b6f3c";
    }
}

export default Artifact;