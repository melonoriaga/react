import React, {Component} from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
    state = ({
        value: 'Melina',
    })

    handleSubmit = event => {
        event.preventDefault();

        // aqui se ejecutaria la function que enviaria nuestros datos a un servidor
        console.log(this.input.value, 'submit');
    }

    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = event => {
        this.setState({
            value: event.target.value.replace(' ', '_'),
        })
    }

    render () {
        return (
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
                // value={this.state.value}
            />
        )
    }
}

export default SearchContainer;