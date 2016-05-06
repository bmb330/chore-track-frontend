import { ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY } from '../actions/categories';
import { addCategory, editCategory, deleteCategory } from '../actions/categories';

const category = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        id: action.id,
        name: action.name
      };
    case EDIT_CATEGORY:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        name: action.name
      };
    case DELETE_CATEGORY:
      return undefined;
    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        category(undefined, action)
      ];
    case EDIT_CATEGORY:
      return state.map(c => category(c, action));
    case DELETE_CATEGORY:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};
