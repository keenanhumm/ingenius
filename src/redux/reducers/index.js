import { SONG_SELECTED } from '../types';
import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    { title: 'Trouble', duration: '4:33'},
    { title: 'NY Times', duration: '3:33'},
    { title: 'The World is Yours', duration: '4:09'},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === SONG_SELECTED) {
    return action.payload;
  }
  // other actions
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})