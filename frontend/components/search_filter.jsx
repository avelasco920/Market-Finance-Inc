import React from 'react';

class SearchFilter extends React.Component {
  render() {
    return (
      <div className='search-filter'>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type='text'
          placeholder='Search'
          className='white-input search-filter-input'
        />
      </div>
    );
  }
}

export default SearchFilter;
