import React, {Component} from 'react';
import HomeLayaut from '../components/home-layaut';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
    state = {
        modalVisible: false,       
    }

    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media,
        })
    }
    
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    render (){
        return (
            <HandleError>

                <HomeLayaut>
                    <Related />

                    <Categories
                        categories={this.props.data.categories} 
                        handleOpenModal={this.handleOpenModal}
                    />

                    {
                        this.state.modalVisible &&

                        <ModalContainer>
                            <Modal  handleClick={this.handleCloseModal} >
                                <VideoPlayer
                                    autoplay
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayaut>

            </HandleError>            
        )
    }
}

export default Home;