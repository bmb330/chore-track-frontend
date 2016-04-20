import { combineReducers } from 'redux';
import chores from './chores';
import categories from './categories';

export default combineReducers({
  chores,
  categories
});
