import React from 'react';
import ReactDOM from 'react-dom';

//components
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCr7wq-csOieIqjuNGpdN9FdMoDlVvpsJo';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
