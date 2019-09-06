import { SONG_SELECTED } from "../types";

// action creators 
export const selectSong = (song) => {
  return {
    type: SONG_SELECTED,
    payload: song
  };
};