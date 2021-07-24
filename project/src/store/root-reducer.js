import { combineReducers } from 'redux';
import { data } from './data/data';
import { workProcess } from './work-process/work-process';
import { user } from './user/user';
import { NameSpace } from '../const';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: workProcess,
  [NameSpace.USER]: user,
});
