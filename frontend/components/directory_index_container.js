import { connect } from 'react-redux';
import {
  fetchDirectoryFolders,
  fetchDirectoryIndex,
  openFolder,
  closeFolder
} from '../actions/directory_actions';
import { fetchCompany } from '../actions/company_actions';
import { fetchNewsArticles } from '../actions/news_articles_actions';
import DirectoryIndex from './directory_index';

const mapStateToProps = (state) => {
  return {
    directoryLoading: state.ui.directoryLoading,
    directoryContent: state.entities.directory
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDirectoryFolders: () => dispatch(fetchDirectoryFolders()),
  fetchDirectoryIndex: () => dispatch(fetchDirectoryIndex()),
  fetchNewsArticles: companyName => dispatch(fetchNewsArticles(companyName)),
  openFolder: folderName => dispatch(openFolder(folderName)),
  closeFolder: folderName => dispatch(closeFolder(folderName)),
  fetchCompany: company => dispatch(fetchCompany(company))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectoryIndex);
