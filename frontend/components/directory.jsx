import React from 'react';
import DirectoryFilterContainer from './directory_filter_container';
import DirectoryIndexContainer from './directory_index_container';

class Directory extends React.Component {
  componentWillReceiveProps(nextProps) {
    const directory = document.getElementById('directory');
    if (nextProps.directoryHidden === true) {
      // getting directoryHidden from ui slice of state.
      // adding directory-show css class creates a smooth transition
      // with css transition attribute
      directory.classList.remove('directory-show');
    } else if (nextProps.directoryHidden === false) {
      directory.classList.add('directory-show');
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
