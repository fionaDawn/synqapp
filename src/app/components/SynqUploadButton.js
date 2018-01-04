import React, {Component} from 'react';
import {connect} from 'react-redux';

import {videoCreate} from '../actions/create';

import CloudUploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';
import Iframe from 'react-iframe';

const styles = {
  button: {
    margin: 12
  }
};

class SynqUploadButton extends Component {

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error in creating the video id.</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

<<<<<<< HEAD
    if (this.props.video.id) {
      return (<div>
        <Iframe url={this.props.uploaderUrl + this.props.video.id + "?token=" + this.props.token} width="450px" height="350px" display="initial" position="relative"/>
=======
    if (this.props.videoId) {
      return (<div>
        <Iframe url={this.props.uploaderUrl + this.props.videoId} width="450px" height="350px" display="initial" position="relative"/>
>>>>>>> refs/remotes/origin/master
      </div>);
    } else {
      return (<div>
        <RaisedButton label="UPLOAD" labelPosition="before" primary={true} icon={<CloudUploadIcon />} onClick={() => this.props.createVideo(this.props.apiUrl)} style={styles.button}/>
      </div>);
    }

  }
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
  return {video: state.video, hasErrored: state.videoHasErrored, isLoading: state.videoIsLoading};
=======
  return {videoId: state.video, hasErrored: state.videoHasErrored, isLoading: state.videoIsLoading};
>>>>>>> refs/remotes/origin/master
};

const mapDispatchToProps = (dispatch) => {
  return {
    createVideo: (url) => dispatch(videoCreate(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SynqUploadButton);
