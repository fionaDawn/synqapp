import React, {Component} from 'react';
import {connect} from 'react-redux';
import {upload} from '../reducers/uploadActions';

import {getAllVideos} from '../reducers/rootReducer'

import CloudUploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12
  }
};

class SynqUploadButton extends Component {

  render() {
    console.log(this.props.uploader.status);
    return (<div>
      <RaisedButton label="UPLOAD" labelPosition="before" primary={true} icon={<CloudUploadIcon />} onClick={() => this.props.upload()} style={styles.button}/>
      <RaisedButton label="Gallery" primary={true} onClick={() => this.props.getAllVideos()} style={styles.button}/>
    </div>);
  }
}

// export default SynqUploadButton;
const mapStateToProps = (state, ownProps) => ({uploader: state.uploader});
const mapDispatchToProps = {
  upload,
  getAllVideos
};

export default connect(mapStateToProps, mapDispatchToProps)(SynqUploadButton)
