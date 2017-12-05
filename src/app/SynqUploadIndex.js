import React, {Component} from 'react';
import {connect} from 'react-redux';

import SynqGallery from './components/SynqGallery'
import SynqVideos from './components/SynqVideos'
import SynqUploadButton from './components/SynqUploadButton'
import SynqUploadFrame from './components/SynqUploadFrame'

const STATUS = {
  UPLOAD: 'create',
  LIST: 'videos',
  PLAY: 'video'
}

class SynqUploaderIndex extends Component {

  renderVideos() {
    return (<SynqVideos/>);
  }

  renderUpload() {
    return (<SynqUploadFrame/>);
  }

  renderUploadButton() {
    // return (<SynqUploadButton/>);
    return (<SynqGallery/>);
  }

  render() {
    const {status} = this.props.uploader;
    switch (status) {
      case STATUS.UPLOAD:
        return this.renderUpload();
      case STATUS.LIST:
        return this.renderVideos();
      default:
        return this.renderUploadButton();
    }
  }
}

const mapStateToProps = (state, ownProps) => ({uploader: state.uploader});
export default connect(mapStateToProps)(SynqUploaderIndex)
