import React from 'react';
import DirectoryIndexItemCompany from './directory_index_item_company';

const DirectoryIndexItemFolder = props => {
  const { folderName, folderContent } = props;
  return (
    <div>
      <div
        className='directory-folder'
        onClick={() => props.toggleFolder(folderName, folderContent)}>
        <i className="fa fa-folder" aria-hidden="true"></i>
        <h3>{folderName}</h3>
      </div>
      { folderContent.map( company =>
        <DirectoryIndexItemCompany key={company.name} company={company}/>
      )}
    </div>
  );
};

export default DirectoryIndexItemFolder;
