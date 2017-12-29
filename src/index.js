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

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'chillhop'}, videos => {
      this.setState({ videos });
    });
  }

  render() {
    const { videos } = this.state;

    return (
      <div>
        <SearchBar />
        <VideoDetail video={videos[0]}/>
        <VideoList videos={videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
