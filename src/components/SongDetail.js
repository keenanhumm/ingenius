import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  const {
    selectedSong = null
  } = props;

  if (!selectedSong) return 'Select a song!';

  return (
    <div>
      <h3>{selectedSong.title}</h3>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  )
};

const mapStateToProps = ({ selectedSong = null }) => ({
  selectedSong
});

export default connect(mapStateToProps)(SongDetail);