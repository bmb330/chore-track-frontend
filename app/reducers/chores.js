import { ADD_CHORE, EDIT_CHORE, TOGGLE_CHORE, DELETE_CHORE } from '../actions/chores';
import { addChore, editChore, toggleChore, deleteChore } from '../actions/chores';

const chore = (state = {}, action) => {
  switch (action.type) {
    case ADD_CHORE:
      return {
        id: action.id,
        ...action.attrs
      };
    case TOGGLE_CHORE:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    case EDIT_CHORE:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        ...action.attrs
      };
    case DELETE_CHORE:
      return undefined;
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CHORE:
      return [
        ...state,
        chore(undefined, action)
      ];
    case EDIT_CHORE:
      return state.map(c => chore(c, action));
    case DELETE_CHORE:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};
