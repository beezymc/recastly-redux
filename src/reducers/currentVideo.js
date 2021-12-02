import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    if (action.video) {
      return state = action.video;
    } else {
      return state;
    }
  default:
    return state;
  }
};

export default currentVideoReducer;
