export function videosHaveErrored(state = false, action) {
  switch (action.type) {
    case 'VIDEOS_HAVE_ERRORED':
      return action.videosHaveErrored;
    default:
      return state;
  }
}
export function videosAreLoading(state = false, action) {
  switch (action.type) {
    case 'VIDEOS_ARE_LOADING':
      return action.videosAreLoading;
    default:
      return state;
  }
}
export function videos(state = [], action) {
  switch (action.type) {
    case 'VIDEOS_FETCH_DATA_SUCCESS':
      return action.videos;
    default:
      return state;
  }
}
