import React, {Component} from 'react';
import {connect} from 'react-redux';
import {list} from './redux/uploadActions';

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
      <RaisedButton label={this.props.uploader.status} labelPosition="before" primary={true} icon={<CloudUploadIcon />} onClick={() => this.props.upload({status: 'uploading!'})} style={styles.button}/>
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => ({uploader: state.uploader});
export default connect(mapStateToProps, {list})(SynqUploadFrame)
