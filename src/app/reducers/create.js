export function videoHasErrored(state = false, action) {
  switch (action.type) {
    case 'VIDEO_HAS_ERRORED':
      return action.videoHasErrored;
    default:
      return state;
  }
}
export function videoIsLoading(state = false, action) {
  switch (action.type) {
    case 'VIDEO_IS_LOADING':
      return action.videoIsLoading;
    default:
      return state;
  }
}
<<<<<<< HEAD
export function video(state = {}, action) {
=======
export function videoCreate(state = [], action) {
>>>>>>> refs/remotes/origin/master
  switch (action.type) {
    case 'VIDEOS_CREATE_SUCCESS':
      return action.video;
    default:
      return state;
  }
}
