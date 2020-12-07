import React, { Component } from 'react';
import Artifact from '../Artifact/Artifact';
import Character from '../Character/Character';
import classes from './Layout.module.css';

import { getArtifactsFromParams, getCharacterFromParams } from '../util';
import { characters, elements } from '../store';
import Bonus from '../Bonus/Bonus';

class Layout extends Component {

    state = {
        loaded: false,
        character: { },
        artifacts: { },
    }

    async componentDidMount() {
        const s = window.location.search;
        const params = s.split("&");

        const character = await getCharacterFromParams(params);
        const artifacts = await getArtifactsFromParams(params);

        this.setState({
            character: character,
            artifacts: artifacts,
            loaded: true,
        })
    }

    render() {
        const { flower, plume, sands, goblet, circlet } = this.state.artifacts;
        const el = this.state.character.name == "Traveler" 
                    ? this.state.character?.element 
                    : characters[this.state.character.name]?.element;
        return (
            <>
            {this.state.loaded ? 
                <div className={classes.Layout} style={{ backgroundColor: elements[el].hex }}>
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

export default Layout;