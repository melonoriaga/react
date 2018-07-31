import React, { Component } from 'react';
import Media from '../componentes/media';
import { connect } from 'react-redux';
import * as actions from '../../action/index';
import{ bindActionCreators } from 'redux';

class MediaContainer extends Component {
    openModal = (id) => this.props.actions.openModal(id);

    render() {
        return (
            <Media id={this.props.id} openModal={this.openModal} {...this.props.data.toJS()} />
        )
    }
} 

function mapStateToProps(state, props) {
    return {
        data: state.getIn(['data', 'entities', 'media', props.id]),
    }
}


function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);