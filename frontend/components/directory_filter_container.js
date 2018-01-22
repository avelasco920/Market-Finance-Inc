import { connect } from 'react-redux';
import {
  fetchDirectoryFolders,
  fetchDirectoryIndex,
} from '../actions/directory_actions';
import DirectoryFilter from './directory_filter';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDirectoryFolders: () => dispatch(fetchDirectoryFolders()),
  fetchDirectoryIndex: () => dispatch(fetchDirectoryIndex()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectoryFilter);
