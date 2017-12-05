import React, {Component} from 'react';
import {connect} from 'react-redux';
import {list} from '../reducers/uploadActions';

import CloudUploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12
  }
};

class SynVideos extends Component {

  render() {
    return (<div></div>);
  }
}

const mapStateToProps = (state, ownProps) => ({uploader: state.uploader});
export default connect(mapStateToProps, {list})(SynVideos)
