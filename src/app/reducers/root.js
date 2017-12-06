import {combineReducers} from 'redux';
import {videos, videosHaveErrored, videosAreLoading} from './videos';
import {videoCreate, videoHasErrored, videoIsLoading} from './create';

export default combineReducers({
  videoCreate,
  videoHasErrored,
  videoIsLoading,
  videos,
  videosHaveErrored,
  videosAreLoading
});
