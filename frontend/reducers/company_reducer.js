import merge from 'lodash/merge';
import {
  RECEIVE_COMPANY
} from '../actions/company_actions';

const initialState = {
  'symbol': 'BBL',
  'name': 'BHP Billiton'
};

const DirectoryReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company;
    default:
      return state;
  }
};

export default DirectoryReducer;
