import React from 'react';

export default (props) => {
  const {
    song = {},
    selectSong = () => {}
  } = props;

  return (
    <div className="item">
      <div className="right floated content">
        <button 
          className="ui button primary"
          onClick={() => selectSong(song)}
        >
          Select
        </button>
      </div>
      <div className="content">{song.title}</div>
    </div>
  )
}