export function videoHasErrored(bool) {
  return {type: 'VIDEO_HAS_ERRORED', videoHasErrored: bool};
}
export function videoIsLoading(bool) {
  return {type: 'VIDEO_IS_LOADING', videoIsLoading: bool};
}
export function videoCreateSuccess(video) {
  return {type: 'VIDEOS_CREATE_SUCCESS', video};
}

export function videoCreate(url) {
  return(dispatch) => {
    dispatch(videoIsLoading(true));
    fetch(url, {
      method: "POST",
      headers: {
        "authorization": "Bearer QbE1bXQhRegEhSB5Ez/SMCkIJ9BTftvUdSGZofH8pFIeYFI6vX1aUWnX0jdjyOzC",
        "content-type": "application/json"
      }
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then((response) => response.json()).then((video) => {
      dispatch(videoCreateSuccess(video.data))
      dispatch(videoIsLoading(false));
    }).catch(() => {
      dispatch(videoHasErrored(true))
    });

  };
}
