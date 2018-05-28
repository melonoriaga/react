import React, { Component } from 'react';
import VideoPlayerLayout    from '../components/video-player-layout';
import Video                from '../components/video';
import Title                from '../components/title';
import PlayPause            from '../components/play-pause';
import Timer                from '../components/timer';
import Controls             from '../components/video-player-controls';
import ProgressBar          from '../components/progress-bar';
import Spinner              from '../components/spinner';
import Volume               from '../components/volume';
import FullScreen           from '../components/full-screen';

class VideoPlayer extends Component {
    state = {
        pause      : true,
        duration   : 0,
        currentTime: 0,    
        loading    : false,
        initVolume : 1
    }

    togglePlay = (event) => {
        this.setState({
            pause : !this.state.pause,
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState ({
            duration: this.video.duration
        });
    }

    handleTimeUpdate = event => {       
        this.setState ({
            currentTime: this.video.currentTime
        });
    }

    handleProgressChange = event => {     
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState ({
            loading: true,
        });
    }

    handleSeeked = event => {
        this.setState ({
            loading: false,
        });
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value;

        this.setState({
            initVolume: this.video.volume
        });
    }

    handleVolumeToggleClick = (event) => {
        this.video.volume = !this.video.volume;
        
        this.setState({
            initVolume : this.video.volume
        });
    }

    setRef = element => {
        this.player = element;
    }

    handleFullScreenClick = (event) => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullScreen();
            console.log('estoy en full');                        
        }  else {
            document.webkitExitFullscreen();
            console.log('NO estoy en full');            
        }
    }

    render () {
        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title
                    title={this.props.title}
                />

                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />

                    <Timer 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />

                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />

                    <Volume
                        volume={this.state.initVolume}
                        handleVolumeChange={this.handleVolumeChange}
                        handleVolumeClick={this.handleVolumeToggleClick}
                    />

                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>

                <Spinner
                    active={this.state.loading}
                />

                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;