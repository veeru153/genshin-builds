import React from 'react';
import classes from './Artifact.module.css';

const Artifact = ({ data }) => {
    return (
        <div className={classes.Artifact}>
            <div className={classes.info}>
                <div className={classes.imgContainer}>
                    <img src="https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Item_Scholar%27s_Bookmark.png"></img>
                </div>
                <div className={classes.name}>Scholar's Bookmark</div>
            </div>
            <div className={classes.stats}>

                <div className={classes.statGroup}>
                    <div>Main Stats</div>
                    <div className={classes.statRow}>
                        <div>HP</div>
                        <div>+69</div>
                    </div>
                </div>

                <div className={classes.statGroup}>
                    <div>Sub Stats</div>
                    <div className={classes.statRow}>
                        <div>ATK</div>
                        <div>+4.20%</div>
                    </div>
                    <div className={classes.statRow}>
                        <div>CRIT Rate</div>
                        <div>+3.6%</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Artifact;