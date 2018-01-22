import merge from 'lodash/merge';
import {
  RECEIVE_FOLDERS,
  RECEIVE_DIRECTORY_INDEX,
  FILL_FOLDER,
  CLEAR_FOLDER
} from '../actions/directory_actions';

const DirectoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLDERS:
      // returns empty folders
      let folders = Object.keys(seedData);
      const obj = {};
      folders.forEach( folderName => obj[folderName] = [] );
      return obj;
    case FILL_FOLDER:
      folders = merge({}, state);
      let folder = {[action.folderName]: seedData[action.folderName]};
      return merge({}, folders, folder);
    case CLEAR_FOLDER:
      folders = merge({}, state);
      folders[action.folderName] = [];
      return folders;
    case RECEIVE_DIRECTORY_INDEX:
      // remove folder from directory view to show all
      // companies listed in alphabetical order
      const index = {};
      Object.keys(seedData).forEach( folderName => {
        seedData[folderName].forEach( company => {
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

const seedData = {
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
