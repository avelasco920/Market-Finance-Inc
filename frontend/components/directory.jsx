import React from 'react';
import SearchFilter from './search_filter';
import DirectoryIndex from './directory_index';

const Directory = () => (
  <div className='directory-wrapper'>
    <SearchFilter />
    <DirectoryIndex />
  </div>
);

export default Directory;
