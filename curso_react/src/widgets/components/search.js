import React from 'react';
import './search.css';

// function Search (props) {
//     return (
//         <div className="Search-container">
//             <input type="text" />
//         </div>  
//     )
// }

const Search = (props) => (
    <form 
        className="Form"
        onSubmit={props.handleSubmit}
    >
        <input 
            ref={props.setRef}
            type="text"
            placeholder="Busca tu video favorito"
            name="search"
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search;