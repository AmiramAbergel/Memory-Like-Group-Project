import React from 'react';
import Button from './Button';
import './PopUp.css';
/*
 * General popUp window will display on request
 */
const PopUp = (props) => {
    return props.trigger ? (
        <div className='popup'>
            <div className='popup-inner'>
                <Button
                    className='popup-close-btn'
                    onBtnClick={() => props.setTrigger(false)}
                >
                    close
                </Button>
                {props.children}
            </div>
        </div>
    ) : (
        ''
    );
};

export default PopUp;
