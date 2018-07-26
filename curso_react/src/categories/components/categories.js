import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/componentes/media';

function Categories(props){
    return (
        <div className="container_categories">
            <Search />
            {
                props.search.map((item) => {
                    return (
                        <Media
                            openModal={props.handleOpenModal}
                            title={item.get('title')} 
                            author={item.get('author')} 
                            cover={item.get('cover')}  
                            key={item.get('id')} 
                            id={item.get('id')} 
                        />
                    )
                })
            }
            {
                props.categories.map((item) => {
                    return (
                        <Category 
                            description={item.get('description')}
                            title={item.get('title')}
                            playlist={item.get('playlist')}
                            key={item.get('id')}
                            handleOpenModal={props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    )
}   

export default Categories