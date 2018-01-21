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
            <img src='https://vignette.wikia.nocookie.net/gameofthrones/images/d/d6/ProfilJoffreyBaratheon1.jpg/revision/latest?cb=20150124113339&path-prefix=de'/>
          </div>
          <h4>KingJoff</h4>
        </div>
      </div>
    );
  }
}

export default Navbar;
