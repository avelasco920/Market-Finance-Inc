export const HIDE_DIRECTORY = 'HIDE_DIRECTORY';
export const SHOW_DIRECTORY = 'SHOW_DIRECTORY';

export const hideDirectory = () => ({
  type: HIDE_DIRECTORY
});

export const showDirectory = () => ({
  type: SHOW_DIRECTORY,
});

export const toggleShow = () => dispatch => {
  dispatch(hideDirectory());
};

export const toggleHide = () => dispatch => {
  dispatch(showDirectory());
};
