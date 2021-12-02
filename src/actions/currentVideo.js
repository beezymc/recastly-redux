var changeVideo = (video) => {
  console.log(video);
  return ({
    //TODO:  Return some action object to change the currently playing video.
    type: 'CHANGE_VIDEO',
    video: video
  });
};

export default changeVideo;
