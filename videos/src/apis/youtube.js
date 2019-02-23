import axios from 'axios';

const KEY = 'AIzaSyBxJGUubYrrw_l8Vy3Hjht0Yp-g8dbGYdQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
