import {combineReducers} from 'redux';
import {videos, videosHaveErrored, videosAreLoading} from './videos';

export default combineReducers({videos, videosHaveErrored, videosAreLoading});
