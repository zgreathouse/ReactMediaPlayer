import React from 'react';

const VideoListItem = ({ video }) => {
  return (
    <li>{video.snippet.title}</li>
  );
}

export default VideoListItem;
