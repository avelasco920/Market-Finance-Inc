import { connect } from 'react-redux';
import {
  fetchDirectoryFolders,
  fetchDirectoryIndex,
} from '../actions/directory_actions';
import Directory from './directory';

const mapStateToProps = (state) => {
  return {
    directoryHidden: state.ui.directoryHidden
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
