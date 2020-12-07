import React, { Component } from 'react';
import classes from './Bonus.module.css';

import { getSetBonusList } from '../util';

class Bonus extends Component {

    state = {
        bonusList: []
    }

    async componentDidMount() {
        const bonusList = await getSetBonusList(this.props.artifacts);
        console.log(bonusList);
        this.setState({
            bonusList: bonusList
        })
    }

    render() {
        return (
            <div className={classes.Bonus}>
                <div className={classes.heading}>Set Bonuses</div>
                <div className={classes.bonusList}>
                    {this.state.bonusList.map(bonus => {
                        return (
                            <div className={classes.bonusRow}>
                                <div>{bonus.setName}</div>
                                <div>{bonus.type}</div>
                                <div>{bonus.bonus}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Bonus