import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Error.module.css';

const Error = (props) => {
    console.log(props)
    return (
        <div className={classes.Error}>
            <div className={classes.heading}>Genshin Builds: Error</div>
            <div className={classes.msg}>{props.err.message}</div>
            <Link to="/" className={classes.navBtn}>
                <button>Create a Build</button>
            </Link>
        </div>
    )
}

export default Error;