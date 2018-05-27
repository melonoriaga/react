import React from 'react';
import FullScreenIco from '../../icons/componentes/full';
import './full-screen.css';

const FullScreen = (props) => {
    return (
        <button
            className="full-screen-box"
            onClick={props.handleFullScreenClick}
        >
            <FullScreenIco
                color="white"
                size={15}
            />
        </button>
    )
}

export default FullScreen;