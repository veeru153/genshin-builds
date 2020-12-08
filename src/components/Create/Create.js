import React, { Component } from 'react';
import classes from './Create.module.css';

import { Formik } from 'formik';
import { characters, elements } from '../store';
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
                if(characterTemp[0] === "Traveler") {
                    characterTemp[3] = newVal;
                }
                break;
            default:
                break;
        }
        props.setFieldValue("character", characterTemp);
    }

    render() {
        return (
            <div className={classes.Create}>
                <div className={classes.heading}>Genshin Builds</div>
                <div className={classes.subHeading}>Create and Share your own Genshin Impact builds</div>
                <Formik
                    initialValues={{
                        character: ["Amber", "1", "1", "Pyro"],
                        flower: ["", "", "",],
                        plume: ["", "", "",],
                        sands: ["", "", "",],
                        goblet: ["", "", "",],
                        circlet: ["", "", "",]
                    }}
                >
                    {(props) => (
                        <form className={classes.form}>
                            <div className={classes.characterSection}>
                                <section className={classes.characterSectionBtns}>
                                    {Object.keys(characters).map(c => (
                                        <Radio
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
                                            if(el === "Adaptive") { }
                                            else {
                                                return (
                                                    <option value={el}>{el}</option>
                                                )
                                            }
                                        })}
                                    </select>
                                </div>
                            </div>
                            {/* <div className={classes.charAttribs}>
                                <p>Ascension</p>
                                {[0,1,2,3,4,5,6].map((a, idx) => (
                                    <Radio 
                                        id={a} 
                                        value={a} 
                                        selection={a === idx}
                                        clicked={() => this.handleCharacterSelection("ascension", a, props)}
                                    />
                                ))}
                            </div> */}
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default Create;