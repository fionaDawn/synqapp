import React, {Component} from 'react';
import {connect} from 'react-redux';

import SynqUploadButton from './components/SynqUploadButton'
import SynqUploadFrame from './components/SynqUploadFrame'

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
export default connect(mapStateToProps)(SynqUploaderIndex)
