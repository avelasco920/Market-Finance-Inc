import React from 'react';
import SearchFilter from './search_filter';
import DirectoryIndexContainer from './directory_index_container';

const Directory = () => (
  <div className='directory'>
    <SearchFilter />
    <DirectoryIndexContainer />
  </div>
);

export default Directory;
