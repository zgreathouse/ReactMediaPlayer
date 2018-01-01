import React, { Component } from 'react';

class VideoDetail extends Component{
  constructor(props) {
    super(props);

    this.state = { showDetail: false };
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription() {
    const { showDetail } = this.state;
    const { video } = this.props;

    if(showDetail){
      return <div>{video.snippet.description}</div>
    } else {
      return <div></div>
    }
  }

  render() {
    const { video } = this.props;
    const { showDetail } = this.state;

    if (!video) {
      return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div
            onClick={() => this.setState({showDetail: !showDetail})}
          >
            Description
          </div>
          {this.toggleDescription()}
        </div>
      </div>
    );
  }
}

export default VideoDetail;
