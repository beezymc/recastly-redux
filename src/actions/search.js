import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';

var handleVideoSearch = (q) => {

  return (dispatch) => {
    console.log(q);
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q
    }, function(videos) {
      console.log(videos[0]);
      store.dispatch(changeVideoList(videos));
      store.dispatch(changeVideo(videos[0]));
    });
  };
  // TODO:  Write an asynchronous action to handle a video search!
  // const newVideos = searchYouTube({
  //   key: YOUTUBE_API_KEY,
  //   query: q
  // });

  // return ({
  //   //TODO:  Return some action object to change the currently playing video.
  //   type: 'CHANGE_VIDEO_AND_VIDEO_LIST',
  //   videos: changeVideoList(newVideos),
  //   currentVideo: changeVideo(newVideos[0])
  // });
};

export default handleVideoSearch;
