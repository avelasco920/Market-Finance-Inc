import React from 'react';
import SearchFilter from './search_filter';
import DirectoryIndexItem from './directory_index_item';

class DirectoryIndex extends React.Component {
  componentWillMount() {
    this.props.fetchDirectoryFolders();
  }

  render() {
    const { directoryContent, directoryLoading } = this.props;
    console.log('directoryLoading', directoryLoading);
    console.log('directoryContent', directoryContent);
    if ( directoryLoading ) {
      return <div></div>;
    } else if (Array.isArray(this.props.directoryContent)) {
      return(
        <div id='directory-index'>
          { directoryContent.forEach( company =>
            <DirectoryIndexItem company={company} />
          )}
        </div>
      );
    } else {
      return(
        <div id='directory-index'>
          { Object.keys(directoryContent).map( folderName =>
            <DirectoryIndexItem
              key={folderName}
              folderName={folderName}
              folderContent={directoryContent[folderName]}
            />
          )}
        </div>
      );
    }
  }
}

export default DirectoryIndex;
