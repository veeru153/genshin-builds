import React, { Component } from 'react';
import Artifact from '../Artifact/Artifact';
import Character from '../Character/Character';
import classes from './Build.module.css';

import { getArtifactsFromParams, getCharacterFromParams } from '../util';
import { characters } from '../store';

import Bonus from '../Bonus/Bonus';
import Error from '../Error/Error';

class Build extends Component {

    state = {
        loaded: false,
        error: false,
        errorMsg: "",
        character: { },
        artifacts: { },
    }

    async componentDidMount() {
        const s = window.location.hash.substring(9);

        if(s.length === 0) {
            this.setState({ 
                error: true,
                errorMsg: "Invalid URL. Check that the URL is correct and try again."
            });
        } else {
            const params = s.split("&");

            let character, artifacts;
    
            try {
                character = await getCharacterFromParams(params);
                artifacts = await getArtifactsFromParams(params);

                this.setState({
                    character: character,
                    artifacts: artifacts,
                    loaded: true,
                })
            } catch (e) {
                this.setState({
                    error: true,
                    errorMsg: e
                })
            }
        }
    }

    render() {
        const { flower, plume, sands, goblet, circlet } = this.state.artifacts;
        const el = this.state.character.name == "Traveler" 
                    ? this.state.character?.element 
                    : characters[this.state.character.name]?.element;
        return (
            <>
            {this.state.error ?
                <Error err={this.state.errorMsg} /> :
            this.state.loaded ? 
                <div className={classes.Build}>
                    <Character data={this.state.character}/>
                    <div className={classes.artifacts}>
                        <Artifact type="flower" data={flower} />
                        <Artifact type="plume" data={plume} />
                        <Artifact type="sands" data={sands} />
                        <Artifact type="goblet" data={goblet} />
                        <Artifact type="circlet" data={circlet} />
                    </div>
                    <Bonus artifacts={this.state.artifacts} />
                </div> :
                <p>Loading...</p>
            }
            </>
        );
    }
}

export default Build;