import React, {Component} from 'react';
import {connect} from 'react-redux';
import {videosFetchData} from '../actions/videos';

class SynqGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'list',
      videos: [],
      hasErrored: false,
      isLoading: false
    }
  }

  fetchData(url) {
    this.setState({isLoading: true});
    fetch(url, {
      headers: {
        "authorization": "Bearer QbE1bXQhRegEhSB5Ez/SMCkIJ9BTftvUdSGZofH8pFIeYFI6vX1aUWnX0jdjyOzC",
        "content-type": "application/json"
      }
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then((response) => response.json()).then((data) => {
      console.log('data', data);
      this.setState({videos: data.data, isLoading: false})
    }).catch(() => this.setState({hasErrored: true}));
  }

  componentDidMount() {
    this.props.fetchData('http://synq-akka.nanoapp.io/v2/videos');
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
