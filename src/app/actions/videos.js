import {config} from '../config.js'

export function videosHaveErrored(bool) {
  return {type: 'VIDEOS_HAVE_ERRORED', videosHaveErrored: bool};
}
export function videosAreLoading(bool) {
  return {type: 'VIDEOS_ARE_LOADING', videosAreLoading: bool};
}
export function videosFetchDataSuccess(videos) {
  return {type: 'VIDEOS_FETCH_DATA_SUCCESS', videos};
}

export function videosFetchData(url) {
  return(dispatch) => {
    dispatch(videosAreLoading(true));
    fetch(url, {
      headers: {
        "authorization": "Bearer " + config.apiToken
      }
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then((response) => response.json()).then((videos) => {
      dispatch(videosFetchDataSuccess(videos.data))
      dispatch(videosAreLoading(false));
    }).catch(() => {
      dispatch(videosHaveErrored(true))
    });

  };
}
