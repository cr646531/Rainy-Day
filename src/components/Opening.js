import React from 'react';
import Sound from 'react-sound';

export default class Opening extends React.Component {
    render() {
        return (
          <Sound
            url="rain.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        );
      }
}