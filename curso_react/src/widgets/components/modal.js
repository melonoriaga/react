import React from 'react';
import './modal.css';

function Modal (props) {
    return (
        <div className="Modal">
            esto es un modal
            {props.children}
            <button className="boton_ok" onClick={props.handleClick}>Cerrar <span></span></button>
        </div>
    )
}

export default Modal;