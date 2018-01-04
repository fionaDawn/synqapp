import {combineReducers} from 'redux';
import {videos, videosHaveErrored, videosAreLoading} from './videos';
<<<<<<< HEAD
import {video, videoHasErrored, videoIsLoading} from './create';

export default combineReducers({
  video,
=======
import {videoCreate, videoHasErrored, videoIsLoading} from './create';

export default combineReducers({
  videoCreate,
>>>>>>> refs/remotes/origin/master
  videoHasErrored,
  videoIsLoading,
  videos,
  videosHaveErrored,
  videosAreLoading
});
