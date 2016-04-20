export const ADD_CHORE = 'ADD_CHORE';
export const TOGGLE_CHORE = 'TOGGLE_CHORE';
export const EDIT_CHORE = 'EDIT_CHORE';
export const DELETE_CHORE = 'DELETE_CHORE';

export const addChore = (attrs) => ({ type: ADD_CHORE, attrs });
export const toggleChore = (id) => ({ type: TOGGLE_CHORE, id });
export const editChore = (id, attrs) => ({ type: EDIT_CHORE, id, attrs });
export const deleteChore = (id) => ({ type: DELETE_CHORE, id });
