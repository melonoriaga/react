import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
    state = {
        author: 'Melina Onoriaga'
    }
    // constructor(props){
    //     super(props)
    //     // this.handleClick = this.handleClick.bind(this);

    //     this.state = {
    //         author: props.author
    //     }
    // }
    handleClick = (event) => {
        // console.log(this.props.image);
        // this.setState({
        //     author: 'Minimi Toy'
        // })
        this.props.openModal(this.props)
    }
    render() {
        const styles = {
            container:{
                fontSize: 14,
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                boxShadow: '2px 2px 2px rgba(45,45,45,.2)',
                padding: 3,
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div>
                    <img
                        src={this.props.cover}
                        alt=""
                        width={260}
                        height={160}
                        className="Media_image"
                    />
                    <div className="Media_box_info">
                        <h3 className="Media_title">{this.props.title}</h3>
                        <p className="Media_descrip">{this.props.author}</p>
                        <div className="flex_center">
                            <button type="button" className="boton_ok">
                                Play
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

Media.propTypes = {
    cover : PropTypes.string,
    title : PropTypes.string.isRequired,
    author: PropTypes.string,
    type  : PropTypes.oneOf(['video', 'audio']),
}

export default Media; 