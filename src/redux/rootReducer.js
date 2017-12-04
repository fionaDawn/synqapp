import {combineReducers} from "redux";

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

export const reducers = combineReducers({uploader});
