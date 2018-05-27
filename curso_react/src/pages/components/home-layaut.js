import React  from 'react';
import './home-layaut.css';

function HomeLayaut(props){
    return (
        <section className="container_content">
            {props.children}
        </section>
    )
}

export default HomeLayaut