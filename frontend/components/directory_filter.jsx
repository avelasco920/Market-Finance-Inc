import React from 'react';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'folder'
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(elementClicked) {
    const byFolder = document.getElementById('by-folder');
    const allCompanies = document.getElementById('all-companies');
    if (this.state.active === elementClicked) {
      return null;
    } else if (this.state.active === 'folder') {
      allCompanies.classList.toggle('active');
      byFolder.classList.toggle('active');
      // adds styling class based on active filter
      allCompanies.classList.toggle('inactive');
      byFolder.classList.toggle('inactive');
      // inactive css class creates cursor styling indicating
      // users' ability to click inactive filter
      this.props.fetchDirectoryIndex();
      // dispatches action to update directory in redux store
      this.setState({ active: 'companies' });
    } else {
      byFolder.classList.toggle('active');
      allCompanies.classList.toggle('active');
      byFolder.classList.toggle('inactive');
      allCompanies.classList.toggle('inactive');
      this.props.fetchDirectoryFolders();
      // dispatches action to update directory in redux store
      this.setState({ active: 'folder' });
    }
  }

  render() {
    return (
      <div className='filter'>
        <h4 id='by-folder' className='active' onClick={() => this.toggleActive('folder')}>By Folder</h4>
        <h4 id='all-companies' className='inactive' onClick={() => this.toggleActive('companies')}>All</h4>
      </div>
    );
  }
}

export default SearchFilter;
