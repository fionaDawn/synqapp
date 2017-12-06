import React, {Component} from 'react';
import {connect} from 'react-redux';
import {videosFetchData} from '../actions/videos';

class SynqGallery extends Component {

  componentDidMount() {
    this.props.fetchData(this.props.apiUrl);
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the videos</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (<ul>
      {
        this.props.videos.map((video) => (<li key={video.id}>
          {video.id}
        </li>))
      }
    </ul>);
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
