import React from 'react';
// import Media from './media';
import MediaContainer from '../containers/media';
import './media.css';

function Playlist(props) {
    return (
        <div className="playlist_box barra_scrool">
            {
                props.playlist.map((mediaId) => {
                    return (
                        <MediaContainer 
                            id={mediaId}
                            key={mediaId} 
                            openModal={props.handleOpenModal}                            
                        />
                    )
                })
            }
        </div>
    )
}

export default Playlist;