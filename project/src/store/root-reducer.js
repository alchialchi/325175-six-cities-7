import { combineReducers } from 'redux';
import { data } from './data/data';
import { workProcess } from './work-process/work-process';
import { user } from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  PROCESS: 'PROCESS',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: workProcess,
  [NameSpace.USER]: user,
});
