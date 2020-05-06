import {combineReducers} from 'redux';
import NameSpace from './name-spaces';
import {reducer as dataReducer} from './data/data';
import {reducer as userReducer} from './user';

export const reducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer,
});
