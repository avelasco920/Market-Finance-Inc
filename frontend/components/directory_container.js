import { connect } from 'react-redux';
import {
  fetchDirectoryFolders,
  fetchDirectoryIndex,
  openFolder,
  closeFolder
} from '../actions/directory_actions';
import Directory from './directory';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDirectoryFolders: () => dispatch(fetchDirectoryFolders()),
  fetchDirectoryIndex: () => dispatch(fetchDirectoryIndex()),
  openFolder: folderName => dispatch(openFolder(folderName)),
  closeFolder: folderName => dispatch(closeFolder(folderName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
