import Immutable from 'immutable'
import {combineReducers} from "redux";
import {createReducer} from 'redux-act';
import {createActionAsync} from 'redux-act-async';

import video from '../services/video'

export const getAllVideos = createActionAsync('LIST', video.list);

const initialState = Immutable.fromJS({status: {}, videos: {}, success: {}, errors: {}});

export const videos = createReducer(initialState, {
  [getAllVideos.ok]: (state, payload) => state.merge({status: 'videos', user: state.concat(payload)})
});

export const uploader = (state = {
  status: ""
}, action) => {
  switch (action.type) {
    case 'UPLOAD':
      return {status: 'create'};
    case 'LIST':
      return {status: 'videos'};
    case 'PLAY':
      return {status: 'video'};
    default:
      return state;
  }
};

// add more reducers if there are others
export const reducers = combineReducers({uploader, videos});
