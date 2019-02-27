import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '4:30' },
    { title: 'All Star', duration: '2:30' },
    { title: 'I Want It That Way', duration: '3:30' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};


export default combineReducers({
  song: songsReducer,
  selectedSong: selectedSongReducer
});