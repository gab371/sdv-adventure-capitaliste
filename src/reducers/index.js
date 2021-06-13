import { combineReducers } from 'redux';

import data from './data';
import account from '../components/account/reducer';

export default combineReducers({
  data,
  account
});
