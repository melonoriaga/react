import React from 'react';
import './video-player.css';

const VideoPlayerLayout = (props) => (
    <div className="Video-player">
        {props.children}
    </div>
)

export default VideoPlayerLayout;