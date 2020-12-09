import React, { Component } from 'react';
import classes from './Create.module.css';

import { Formik } from 'formik';
import { characters, elements, statPairs } from '../store';
import { flower, feather, clock, goblet, circlet } from '../store/artifacts';
import Radio from '../UI/Radio/Radio';

// http://localhost:3000/build?character=Fischl,2,31&flower=adv,12,3,em+69,atk+4.20p,critr+3.6p&plume=cwf,12,3,hp+69,atk+4.20p,critr+3.6p&sands=wat,12,4,hp+69,atk+4.20p,critr+3.6p&goblet=adv,12,4,hp+69,atk+4.20p,critr+3.6p&circlet=sch,12,5,hp+69,atk+4.20p,critr+3.6p

// http://localhost:3000/build?character=Amber,12,12&plume=adv,12,3,hp+69,atk+4.20p,critr+3.6p&goblet=adv,12,4,hp+69,atk+4.20p,critr+3.6p&circlet=sch,12,5,hp+69,atk+4.20p,critr+3.6p

class Create extends Component {

    handleCharacterSelection = (type, newVal, props) => {
        let characterTemp = props.values.character;
        switch (type) {
            case "character":
                characterTemp[0] = newVal;
                characterTemp[3] = characterTemp[0] === "Traveler" ? "Anemo" : characters[newVal].element;
                break;
            case "ascension":
                characterTemp[1] = newVal;
                break;
            case "level":
                characterTemp[2] = newVal;
                break;
            case "element":
                if (characterTemp[0] === "Traveler") {
                    characterTemp[3] = newVal;
                }
                break;
            default:
                break;
        }
        props.setFieldValue("character", characterTemp);
    }

    handleArtifactSelection = (type, newVal, props) => {
        const artifactTemp = props.values[type];
        artifactTemp[0] = newVal;
        props.setFieldValue(type, artifactTemp);
    }

    handleArtifactMeta = (a, type, newVal, props) => {
        const artifactTemp = props.values[a];
        switch (type) {
            case "stars":
                artifactTemp[1] = newVal;
                break;
            case "level":
                artifactTemp[2] = newVal;
                break;
            default:
                break;
        }
        props.setFieldValue(a, artifactTemp);
    }

    handleArtifactMainStat = (a, isKey, val, props) => {
        const artifactTemp = props.values[a];

        if (isKey) artifactTemp[3] = val;
        else artifactTemp[4] = `${val}`;

        props.setFieldValue(a, artifactTemp);
    }

    handleArtifactSubStat = (a, idx, isKey, val, props) => {
        const artifactTemp = props.values[a];

        if (isKey) artifactTemp[idx] = val;
        else artifactTemp[idx] = `${val}`;

        props.setFieldValue(a, artifactTemp);
    }

    addSubStat = (e, a, props) => {
        e.preventDefault();
        const artifactTemp = props.values[a];
        artifactTemp.push("hp");
        artifactTemp.push("");
        props.setFieldValue(a, artifactTemp);
    }

    render() {
        return (
            <div className={classes.Create}>
                <div className={classes.heading}>Genshin Builds</div>
                <div className={classes.subHeading}>Create and Share your own Genshin Impact builds</div>
                <Formik
                    initialValues={{
                        character: ["Amber", "1", "1", "Pyro"],
                        flower: ["none", "3", "0", "hp", "", "hp", ""],
                        plume: ["none", "3", "0", "hp", ""],
                        sands: ["none", "3", "0", "hp", ""],
                        goblet: ["none", "3", "0", "hp", ""],
                        circlet: ["none", "3", "0", "hp", ""]
                    }}
                >
                    {(props) => (
                        <form className={classes.form}>
                            <div className={classes.characterSection}>
                                <section className={classes.characterSectionBtns}>
                                    {Object.keys(characters).map(c => (
                                        <Radio
                                            key={c}
                                            id={c}
                                            value={c}
                                            selection={c === props.values.character[0]}
                                            clicked={() => this.handleCharacterSelection("character", c, props)}
                                        />
                                    ))}
                                </section>
                                <div className={classes.imgContainer}>
                                    <img
                                        src={characters[props.values.character[0]].img}
                                        alt={props.values.character[0]}
                                        style={{ backgroundColor: elements[props.values.character[3]].hex }}
                                    />
                                </div>
                            </div>
                            <div className={classes.charAttribs}>
                                <div>
                                    <div>Ascension:</div>
                                    <input
                                        type="text"
                                        className={classes.TextInput}
                                        value={props.values.character[1]}
                                        onChange={(e) => this.handleCharacterSelection("ascension", e.target.value, props)}
                                    ></input>
                                </div>
                                <div>
                                    <div>Level:</div>
                                    <input
                                        type="text"
                                        className={classes.TextInput}
                                        value={props.values.character[2]}
                                        onChange={(e) => this.handleCharacterSelection("level", e.target.value, props)}
                                    ></input>
                                </div>
                                <div style={{ display: props.values.character[0] === "Traveler" ? "flex" : "none" }}>
                                    <div>Element:</div>
                                    <select
                                        className={classes.dropdown}
                                        onChange={(e) => this.handleCharacterSelection("element", e.target.value, props)}
                                    >
                                        {Object.keys(elements).map(el => {
                                            if (el === "Adaptive") { }
                                            else {
                                                return (
                                                    <option key={el} value={el}>{el}</option>
                                                )
                                            }
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className={classes.artifactSection}>
                                <ArtifactSelection
                                    title="Flower of Life"
                                    aType={flower}
                                    tag="flower"
                                    fprops={props}
                                    _={this}
                                />
                                <ArtifactSelection
                                    title="Plume of Death"
                                    aType={feather}
                                    tag="plume"
                                    fprops={props}
                                    _={this}
                                />
                                <ArtifactSelection
                                    title="Sands of Eon"
                                    aType={clock}
                                    tag="sands"
                                    fprops={props}
                                    _={this}
                                />
                                <ArtifactSelection
                                    title="Goblet of Eonothem"
                                    aType={goblet}
                                    tag="goblet"
                                    fprops={props}
                                    _={this}
                                />
                                <ArtifactSelection
                                    title="Circlet of Logos"
                                    aType={circlet}
                                    tag="circlet"
                                    fprops={props}
                                    _={this}
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

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

export default Create;