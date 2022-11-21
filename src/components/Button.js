import React from 'react';
import './Button.css';

/*
 * An all-purpose button with a general setting should be used throughout the app for match information.
 */
const Button = (props) => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onBtnClick}
            disabled={props.disable}
        ></button>
    );
};

export default Button;
