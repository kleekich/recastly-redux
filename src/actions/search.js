import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  //Thunk allows us to return function instead of action object using dispatch  
  return (dispatch) => {
    let options = {
      query: q,
      key: YOUTUBE_API_KEY,
    }
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
    });

  }
};

export default handleVideoSearch;
