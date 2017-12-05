export function videosHaveErrored(state = false, action) {
  switch (action.type) {
    case 'VIDEOS_HAVE_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}
export function videosAreLoading(state = false, action) {
  switch (action.type) {
    case 'VIDEOS_ARE_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
export function videos(state = [], action) {
  // console.log('action', action);
  switch (action.type) {
    case 'VIDEOS_FETCH_DATA_SUCCESS':
      return action.videos;
    default:
      return state;
  }
}
