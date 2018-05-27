import React from 'react';
import Play from '../../icons/componentes/play';
import Pause from '../../icons/componentes/pause';

function PlayPause (props) {
    return (
        <div className="play-pause">
        {
            props.pause ?
                <button onClick={props.handleClick} >
                    <Play color="white" size={20} />
                </button>
            :
                <button onClick={props.handleClick} >
                    <Pause color="white" size={20} />       
                </button>
        }
        </div>
    )
}

export default PlayPause;