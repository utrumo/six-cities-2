import {combineReducers} from 'redux';
import NameSpace from './name-spaces.js';

import {reducer as data} from './data/data.js';
import {reducer as user} from './user/user.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
