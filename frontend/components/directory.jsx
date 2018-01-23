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
      directory.classList.remove('show-directory');
      directory.classList.add('hide-directory');
    } else if (nextProps.directoryHidden === false) {
      directory.classList.remove('hide-directory');
      directory.classList.add('show-directory');
    }
  }

  render() {
    return(
      <div id='directory'>
        <DirectoryFilterContainer />
        <DirectoryIndexContainer />
      </div>
    );
  }
}
export default Directory;
