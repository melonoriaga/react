import React from 'react';

function VideoPlayerControls(props) {
    return (
        <div className="Video-Player-Controls">
            {props.children}
        </div>
    )
}

export default VideoPlayerControls;