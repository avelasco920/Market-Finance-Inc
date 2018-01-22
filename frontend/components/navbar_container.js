import { connect } from 'react-redux';
import {
  toggleDirectoryShow,
  toggleDirectoryHide,
} from '../actions/directory_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
  return {
    directoryHidden: state.ui.directoryHidden
  };
};

const mapDispatchToProps = dispatch => ({
  toggleDirectoryShow: () => dispatch(toggleDirectoryShow()),
  toggleDirectoryHide: () => dispatch(toggleDirectoryHide()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
