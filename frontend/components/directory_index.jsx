import React from 'react';
import DirectoryIndexItemCompany from './directory_index_item_company';
import DirectoryIndexItemFolder from './directory_index_item_folder';

class DirectoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFolder = this.toggleFolder.bind(this);
  }

  componentWillMount() {
    this.props.fetchDirectoryFolders();
  }

  toggleFolder(folderName, folderContent) {
    if (folderContent.length) {
      this.props.closeFolder(folderName);
    } else if (!folderContent.length) {
      this.props.openFolder(folderName);
    }
  }

  render() {
    const { directoryContent, directoryLoading } = this.props;
    if ( directoryLoading ) {
      return <div></div>;
    } else if (Array.isArray(this.props.directoryContent)) {
      return(
        <div id='directory-index'>
          { directoryContent.map( company =>
            <DirectoryIndexItemCompany key={company.name} company={company} />
          )}
        </div>
      );
    } else {
      return(
        <div id='directory-index'>
          { Object.keys(directoryContent).map( folderName =>
            <DirectoryIndexItemFolder
              key={folderName}
              folderName={folderName}
              folderContent={directoryContent[folderName]}
              toggleFolder={this.toggleFolder}
            />
          )}
        </div>
      );
    }
  }
}

export default DirectoryIndex;
