import React from 'react';
import VolumenIco from '../../icons/componentes/volumen';
import './volume.css';

function Volume (props) {
    return (
        <button
            className="Volume"
        >
            {
                props.volume ?
                    <div onClick={props.handleVolumeClick} >
                        <VolumenIco color="white" size={20} />
                    </div>
                :
                    <div className="Mute" onClick={props.handleVolumeClick} >
                        <VolumenIco color="white" size={20} />
                        <span></span>
                    </div>
            }
            <div className="box_range">
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volume;