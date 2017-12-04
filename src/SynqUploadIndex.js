import React, {Component} from 'react';
import {connect} from 'react-redux';

import SynqUploadButton from './SynqUploadButton'
import SynqUploadFrame from './SynqUploadFrame'
import {upload, list, play, wait} from './redux/uploadActions';

const STATUS = {
  UPLOAD: 'create',
  LIST: 'videos',
  PLAY: 'video'
}

class SynqUploaderIndex extends Component {

  renderUpload() {
    return (<SynqUploadFrame/>);
  }

  renderUploadButton() {
    return (<SynqUploadButton/>);
  }

  render() {
    const {status} = this.props.uploader;
    switch (status) {
      case STATUS.UPLOAD:
        return this.renderUpload();
      default:
        return this.renderUploadButton();
    }
  }
}
const mapStateToProps = (state, ownProps) => ({uploader: state.uploader});

const mapDispatchToProps = {
  upload,
  list,
  play,
  wait
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(SynqUploaderIndex);

export default AppContainer;
