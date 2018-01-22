export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';
export const FILL_FOLDER = 'FILL_FOLDER';
export const EMPTY_FOLDER = 'EMPTY_FOLDER';
export const RECEIVE_DIRECTORY_INDEX = 'RECEIVE_DIRECTORY_INDEX';

export const receiveFolders = () => ({
  type: RECEIVE_FOLDERS
});

export const fillFolder = folderName => ({
  type: FILL_FOLDER,
  folderName
});

export const emptyFolder = folderName => ({
  type: EMPTY_FOLDER,
  folderName
});

export const receiveDirectoryIndex = () => ({
  type: RECEIVE_DIRECTORY_INDEX
});

export const fetchDirectoryFolders = () => dispatch => {
  dispatch(receiveFolders());
};

export const openFolder = folderName => dispatch => {
  dispatch(fillFolder(folderName));
};

export const closeFolder = folderName => dispatch => {
  dispatch(emptyFolder(folderName));
};

export const fetchDirectoryIndex = () => dispatch => {
  dispatch(receiveDirectoryIndex());
};
