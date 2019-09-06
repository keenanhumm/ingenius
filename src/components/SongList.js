import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../redux/actions';

import SongItem from './SongItem';

class SongList extends Component {
  render(){
    const {
      props: {
        songs = [],
        selectSong = () => {}
      }
    } = this;
    
    return (
      <div className="ui divided list">
        {songs.map((song) => (<SongItem key={song.title} selectSong={selectSong} song={song} />))}
      </div>
    );
  }
}

const mapStateToProps = ({ songs = [], selectedSong = null }) => {
  return {
    selectedSong,
    songs
  };
}

export default connect(mapStateToProps, { selectSong })(SongList);