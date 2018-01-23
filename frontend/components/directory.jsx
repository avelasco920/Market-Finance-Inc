import React from 'react';
import DirectoryFilterContainer from './directory_filter_container';
import DirectoryIndexContainer from './directory_index_container';

class Directory extends React.Component {
  componentWillReceiveProps(nextProps) {
    const directory = document.getElementById('directory');
    if (nextProps.directoryHidden === true) {
      directory.classList.remove('directory-show');
      directory.classList.add('directory-hidden');
    } else if (nextProps.directoryHidden === false) {
      directory.classList.add('directory-show');
      directory.classList.remove('directory-hidden');
    }
  }

  render() {
    return(
      <div id='directory' className='directory-hidden'>
        <DirectoryFilterContainer />
        <DirectoryIndexContainer />
      </div>
    );
  }
}
export default Directory;
