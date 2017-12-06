import React, {Component} from 'react';
import {connect} from 'react-redux';
import {videosFetchData} from '../actions/videos';

import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  }
};

class SynqGallery extends Component {

  componentDidMount() {
    this.props.fetchData(this.props.apiUrl);
  }

  render() {

    if (this.props.hasErrored) {
      return <Snackbar open={true} message="Sorry! There was an error loading the videos" autoHideDuration={3000}/>;
    }
    if (this.props.isLoading) {
      return <CircularProgress size={80} thickness={5}/>;
    }

    return (<div style={styles.root}>
      <GridList cellHeight={180} style={styles.gridList}>
        {
          this.props.videos.map((video) => (<GridTile key={video.id}>
            {video.id}
          </GridTile>))
        }
      </GridList>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {videos: state.videos, hasErrored: state.videosHaveErrored, isLoading: state.videosAreLoading};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(videosFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SynqGallery);
