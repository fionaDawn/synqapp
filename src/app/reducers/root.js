import {combineReducers} from 'redux';
import {videos, videosHaveErrored, videosAreLoading} from './videos';
import {video, videoHasErrored, videoIsLoading} from './create';

export default combineReducers({
  video,
  videoHasErrored,
  videoIsLoading,
  videos,
  videosHaveErrored,
  videosAreLoading
});
