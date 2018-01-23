import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directoryHidden: this.props.directoryHidden
    };
    this.toggleDirectoryVisibility = this.toggleDirectoryVisibility.bind(this);
  }

  toggleDirectoryVisibility() {
    if (this.props.directoryHidden) {
      this.props.toggleDirectoryShow();
      // makes an action call to update visbility state in store
      // to trigger directory/drawer component to show
    } else {
      // makes an action call to update visbility state in store
      // to trigger directory/drawer component to hide
      this.props.toggleDirectoryHide();
    }
  }

  renderIcon() {
    // toggles icon and message depending on directory/drawer visibility
    if (this.props.directoryHidden) {
      // shows a search icon and directory message if drawer is closed
      return <i className="fa fa-search navbar-icon" aria-hidden="true" onClick={this.toggleDirectoryVisibility}><span>Directory</span></i>;
    } else {
      // shows an arrow and hide message if drawer is open
      return <i className="fa fa-chevron-left navbar-icon" aria-hidden="true" onClick={this.toggleDirectoryVisibility}><span>Hide</span></i>;
    }
  }

  render() {
    return (
      <div className='navbar'>
        {this.renderIcon()}
        <h3>Market Finance Inc</h3>
        <div className='navbar-right'>
          <div className='profile-img'>
            <img src='http://wandw.wdfiles.com/local--files/regulus/Regulus_02.jpg'/>
          </div>
          <h4>investor_415</h4>
        </div>
      </div>
    );
  }
}

export default Navbar;
