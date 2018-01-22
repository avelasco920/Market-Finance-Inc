export const START_LOADING_DIRECTORY = 'START_LOADING_DIRECTORY';
export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';
export const FILL_FOLDER = 'FILL_FOLDER';
export const CLEAR_FOLDER = 'CLEAR_FOLDER';
export const RECEIVE_DIRECTORY_INDEX = 'RECEIVE_DIRECTORY_INDEX';

export const startLoadingDirectory = () => ({
  type: START_LOADING_DIRECTORY
});

export const receiveFolders = () => ({
  type: RECEIVE_FOLDERS
});

export const fillFolder = folderName => ({
  type: FILL_FOLDER,
  folderName
});

export const emptyFolder = folderName => ({
  type: CLEAR_FOLDER,
  folderName
});

export const receiveDirectoryIndex = () => ({
  type: RECEIVE_DIRECTORY_INDEX
});

export const fetchDirectoryFolders = () => dispatch => {
  dispatch(startLoadingDirectory());
  dispatch(receiveFolders());
};

export const openFolder = folderName => dispatch => {
  dispatch(fillFolder(folderName));
};

export const closeFolder = folderName => dispatch => {
  dispatch(emptyFolder(folderName));
};

export const fetchDirectoryIndex = () => dispatch => {
  dispatch(startLoadingDirectory());
  dispatch(receiveDirectoryIndex());
};
