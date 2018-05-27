import React from 'react';
import './regular-error.css';
import ImgError from '../../../images/error.png';

function RegularError(props) {
    return (
        <h1 className="Error-container">
            <h1>Oops! <br/> Ha ocurrido un error</h1>
            <img src={ImgError} />
        </h1>
    )
}

export default RegularError;