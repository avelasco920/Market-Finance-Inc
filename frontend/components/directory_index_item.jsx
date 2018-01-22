import React from 'react';

const DirectoryIndexItem = props => {
  debugger;
  if ( props.folderName ) {
    return (
      <div className='directory-folder'>
        <h1>{props.folderName}</h1>
      </div>
    );
  } else {
    return(
      <div className='directory-company-item'>

      </div>
    );
  }
};

export default DirectoryIndexItem;
