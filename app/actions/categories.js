export const ADD_CATEGORY = 'ADD_CHORE';
export const EDIT_CATEGORY = 'EDIT_CHORE';
export const DELETE_CATEGORY = 'DELETE_CHORE';

export const addCategory = (id, name) => ({ type: ADD_CATEGORY, id, name });
export const editCategory = (id, name) => ({ type: EDIT_CATEGORY, id, name });
export const deleteCategory = (id) => ({ type: DELETE_CATEGORY, id });
