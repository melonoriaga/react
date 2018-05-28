import React from 'react';
import './modal.css';

function Modal (props) {
    return (
        <div className="Modal">
            <div className="Modal-container">
                {props.children}
            </div>
            <button className="closed" onClick={props.handleClick} />
        </div>
    )
}

export default Modal;