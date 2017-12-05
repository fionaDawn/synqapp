import React, {Component} from 'react';
import {connect} from 'react-redux';
import {list} from '../reducers/uploadActions';

import Iframe from 'react-iframe';
import CloudUploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12
  }
};

class SynqUploadFrame extends Component {

  render() {
    return (<div>
      <Iframe url="https://synq-unicorn.herokuapp.com/uploader/4e751c18-9f32-473e-aa6c-3fee53ae80a6" width="450px" height="350px" display="initial" position="relative"/>
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => ({uploader: state.uploader});
export default connect(mapStateToProps, {list})(SynqUploadFrame)
