import { SET_VISIBLITY_FILTER, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/visibilityFilter';

export default (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBLITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
