import React from 'react';
import SearchFilter from './search_filter';
import DirectoryIndex from './directory_index';

class Directory extends React.Component {
  componentWillMount() {
  }

  render() {
    return(
      <div className='directory'>
        <SearchFilter />
        <DirectoryIndex />
      </div>
    );
  }
}

export default Directory;
