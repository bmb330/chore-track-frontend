import { combineReducers } from 'redux';
import chores from './chores';
import categories from './categories';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  chores,
  categories,
  visibilityFilter
});
