import React from 'react';
import FullScreenIco from '../../icons/componentes/full';
import './full-screen.css';

function FullScreen (props) {
    return (
        <button className="full-screen-box">
            <FullScreenIco
                color="white"
                size={15}
            />
        </button>
    )
}

export default FullScreen;