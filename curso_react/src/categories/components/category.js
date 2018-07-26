import React from 'react';
import Playlist from '../../playlist/componentes/playlist';
import './category.css';

function Category (props){
    return (
        <div className="playlist_container">
        
            <p className="subtitle">{props.description}</p>

            <h2 className="title">{props.title}</h2>

            <Playlist
                handleOpenModal={props.handleOpenModal}                
                playlist={props.playlist}
            />
        </div>
    )
}

export default Category