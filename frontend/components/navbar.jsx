import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directoryHidden: true
    };
  }

  renderIcon() {
    if (this.state.directoryHidden) {
      return <i className="fa fa-search navbar-icon" aria-hidden="true"></i>;
    } else {
      return <i className="fa fa-chevron-left navbar-icon" aria-hidden="true"></i>;
    }
  }

  render() {
    return (
      <div className='navbar'>
        {this.renderIcon()}
        <h3>Market Finance Inc</h3>
        <div className='navbar-right'>
          <div className='profile-img'>
            <img src='http://2.bp.blogspot.com/-zj8mwZ6ZCpI/UlR8EwnfvtI/AAAAAAAAAH0/WWqRHDiQjxY/s1600/american-psycho-2000-1080p-bluray-x264-hdmi-mkv_snapshot_00-26-59_2011-03-21_01-50-22-jpg.jpeg'/>
          </div>
          <h4>P_Bateman</h4>
        </div>
      </div>
    );
  }
}

export default Navbar;
