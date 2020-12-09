import React from 'react';
import classes from './Create.module.css';
import { statPairs } from '../store';

const ArtifactSelection = ({ title, aType, tag, fprops, _ }) => {

    let subStatPairs = [];
    for (let i = 5; i < fprops.values[tag].length; i += 2) {
        subStatPairs.push(
            <div className={classes.statPair}>
                <div>
                    <select
                        className={classes.dropdown}
                        onChange={(e) => _.handleArtifactSubStat(tag, i, true, e.target.value, fprops)}
                    >
                        {Object.keys(statPairs).map(s => (
                            <option value={s}>{statPairs[s]}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        className={classes.TextInput}
                        value={fprops.values[tag][i + 1]}
                        onChange={(e) => _.handleArtifactSubStat(tag, i + 1, false, e.target.value, fprops)}
                    ></input>
                </div>
            </div>
        )
    }


    return (
        <div className={classes.artifactData}>
            <div className={classes.artifactTitle}>{title}</div>
            <div className={classes.artifactInfo}>
                <div className={classes.imgContainer}>
                    <img src={aType[fprops.values[tag][0]].img}></img>
                </div>
                <div>
                    <select
                        className={classes.dropdown}
                        onChange={(e) => _.handleArtifactSelection(tag, e.target.value, fprops)}
                    >
                        {Object.keys(aType).map(a => (
                            <option value={a}>{aType[a].name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={classes.artifactMeta}>
                <div>
                    <div>Stars</div>
                    <input
                        type="text"
                        className={classes.TextInput}
                        value={fprops.values[tag][1]}
                        onChange={(e) => _.handleArtifactMeta(tag, "stars", e.target.value, fprops)}
                    ></input>
                </div>
                <div>
                    <div>Level</div>
                    <input
                        type="text"
                        className={classes.TextInput}
                        value={fprops.values[tag][2]}
                        onChange={(e) => _.handleArtifactMeta(tag, "level", e.target.value, fprops)}
                    ></input>
                </div>
            </div>

            <section className={classes.stats}>
                <p>Main Stat</p>
                <div className={classes.statPair}>
                    <div>
                        <select
                            className={classes.dropdown}
                            onChange={(e) => _.handleArtifactMainStat(tag, true, e.target.value, fprops)}
                        >
                            {Object.keys(statPairs).map(s => (
                                <option value={s}>{statPairs[s]}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            className={classes.TextInput}
                            value={fprops.values[tag][4]}
                            onChange={(e) => _.handleArtifactMainStat(tag, false, e.target.value, fprops)}
                        ></input>
                    </div>
                </div>
            </section>

            <section className={classes.stats}>
                <p>Sub Stats</p>
                {subStatPairs.map(p => p)}
            </section>

            <div>
                <button className={classes.addSubStatBtn} onClick={(e) => _.addSubStat(e, tag, fprops)}>
                    + Add Sub Stat
                </button>
            </div>

        </div>
    )
}

export default ArtifactSelection;