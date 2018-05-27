import React from 'react';
import logo  from '../../../images/logo.png';
import './related.css';
function Related (props){
    return (
        <div className="related_box barra_scrool">
            <div className="logo_box">
                <img src={logo} />
            </div>
        </div>
    )
}

export default Related