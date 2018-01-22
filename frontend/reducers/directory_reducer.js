import merge from 'lodash/merge';
import {
  RECEIVE_FOLDERS,
  RECEIVE_DIRECTORY_INDEX,
  FILL_FOLDER,
  EMPTY_FOLDER
} from '../actions/directory_actions';

const DirectoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLDERS:
      let folders = Object.keys(initialState);
      const obj = {};
      folders.forEach( name => obj[name] = [] );
      return obj;
    case FILL_FOLDER:
      folders = merge({}, state);
      let folder = {[action.folderName]: initialState[action.folderName]};
      return merge({}, folders, folder);
    case EMPTY_FOLDER:
      folders = merge({}, state);
      folders[action.folderName] = [];
      return folders;
    case RECEIVE_DIRECTORY_INDEX:
      const index = {};
      Object.keys(initialState).forEach( folderName => {
        initialState[folderName].forEach( company => {
          index[company.symbol] = company;
        });
      });
      const sorted = [];
      Object.keys(index).sort().forEach( companyName => sorted.push(index[companyName]));
      return sorted;
    default:
      return state;
  }
};

export default DirectoryReducer;

const initialState = {
  'Energy': [
    {
      'symbol': 'XOM',
      'name': 'Exxon Mobil'
    }, {
      'symbol': 'CVX',
      'name': 'Chevron'
    }, {
      'symbol': 'BP',
      'name': 'BP'
    }
  ],
  'Mining': [
    {
      'symbol': 'AAL',
      'name': 'Anglo'
    }, {
      'symbol': 'ABX',
      'name': 'Barrick Gold Corp'
    }, {
      'symbol': 'BBL',
      'name': 'BHP Billiton'
    }, {
      'symbol': 'GLEN',
      'name': 'Glencore'
    }, {
      'symbol': 'HMY',
      'name': 'Harmony Gold Mining'
    }
  ],
  'Green Tech Companies': [
    {
      'symbol': 'CSCO',
      'name': 'Cisco'
    }, {
      'symbol': 'INTC',
      'name': 'Intel'
    }, {
      'symbol': 'MSFT',
      'name': 'Microsoft'
    }, {
      'symbol': 'SAP',
      'name': 'SAP'
    }
  ]
};
