import React from 'react';
import Media from './media';
import './media.css';

function Playlist(props) {
    return (
        <div className="playlist_box barra_scrool">
            {
                props.playlist.map((item) => {
                    return (
                        <Media 
                            {...item} 
                            key={item.id} 
                            handleClick={props.handleOpenModal}                            
                        />
                    )
                    
                })
            }
        </div>
    )
}

export default Playlist;