import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

//API Key
const API_KEY = 'AIzaSyCr7wq-csOieIqjuNGpdN9FdMoDlVvpsJo';

//Root Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('chillhop');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)}/>
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
