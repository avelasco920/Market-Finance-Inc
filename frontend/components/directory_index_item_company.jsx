import React from 'react';

const DirectoryIndexItemCompany = props => {
  const { company } = props;
  return (
    <div className='directory-company'>
      <h4>{company.name}</h4>
      <h3>{company.symbol}</h3>
    </div>
  );
};

export default DirectoryIndexItemCompany;
