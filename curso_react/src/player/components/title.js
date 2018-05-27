import React from 'react';

function Title (props) {
    return (
        <div className="Title-box">
            <h2>
                {props.title}
            </h2>
        </div>
    )
}

export default Title;