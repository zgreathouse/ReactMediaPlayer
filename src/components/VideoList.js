import React from 'react';

//components
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {

  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
