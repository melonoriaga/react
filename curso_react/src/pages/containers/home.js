import React, {Component} from 'react';
import HomeLayaut from '../components/home-layaut';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
class Home extends Component {
    handleOpenModal = (id) => {
        this.props.dispatch({
            type: 'OPEN_MODAL',
            payload: {
                mediaId: id,
            }
        })
    }
    
    handleCloseModal = (event) => {
        this.props.dispatch({
            type: 'CLOSE_MODAL',
        })
    }
    render (){
        console.log(this.props.modal.get('mediaId'));
        return (
            <HandleError>

                <HomeLayaut>
                    <Related />

                    <Categories
                        categories={this.props.categories} 
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />

                    {
                        this.props.modal.get('visibility') &&

                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal} >
                                <VideoPlayer
                                    autoplay
                                    id={this.props.modal.get('mediaId')}
                                    // src={this.state.media.src}
                                    // title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayaut>

            </HandleError>            
        )
    }
}

function mapStateToProps (state, props) {
    const categories = state.getIn(['data', 'categories']).map((categoryId) => {
        return state.getIn(['data', 'entities', 'categories', categoryId])
    })

    let searchResults = list();
    const search      = state.getIn(['data', 'search']);
    if (search) {
        const mediaList = state.getIn(['data', 'entities', 'media']);
        searchResults = mediaList.filter((item) => {
            if (item.get('author').toLowerCase().includes(search.toLowerCase()) || item.get('author').toLowerCase().includes(search.toLowerCase())) {
                return true;
            }
        }).toList();
    }

    return {
        categories: categories,
        search: searchResults,
        modal: state.get('modal'),
    }
}

export default connect(mapStateToProps)(Home);
// export default Home;