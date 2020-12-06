import React, { Component } from 'react';
import Artifact from '../Artifact/Artifact';
import Character from '../Character/Character';
import classes from './Layout.module.css';

import { getArtifactsFromParams, getCharacterFromParams } from '../util';
import { characters, elements } from '../store';

// http://localhost:3000/?character=Bennett,2,31&flower=sch,12,hp+69,atk+4.20p,critr+3.6p&plume=sch,12,hp+69,atk+4.20p,critr+3.6p&sands=sch,12,hp+69,atk+4.20p,critr+3.6p&goblet=sch,12,hp+69,atk+4.20p,critr+3.6p&circlet=sch,12,hp+69,atk+4.20p,critr+3.6p

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
        return (
            <>
            {this.state.loaded ? 
                <div className={classes.Layout} style={{ backgroundColor: elements[characters[this.state.character.name].element].hex }}>
                    <Character data={this.state.character}/>
                    <div className={classes.artifacts}>
                        <Artifact data={flower} />
                        <Artifact data={plume} />
                        <Artifact data={sands} />
                        <Artifact data={goblet} />
                        <Artifact data={circlet} />
                    </div>
                </div> :
                <p>Loading...</p>
            }
            </>
        );
    }
}

export default Layout;