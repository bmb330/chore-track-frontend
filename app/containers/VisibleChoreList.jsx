import { connect } from 'react-redux';
import { addChore, toggleChore, editChore, deleteChore } from '../actions/chores';
import ChoreList from '../components/ChoreList';

const getVisableChores = (chores, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return chores;
    case 'SHOW_COMPLETED':
      return chores.filter(c => c.completed);
    case 'SHOW_ACTIVE':
      return chores.filter(c => !c.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    chores: getVisableChores(state.chores, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChoreClick: (id) => dispatch(toggleChore(id)),
    addChore: (attrs) => dispatch(addChore(attrs))
  };
};

const VisibleChoreList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoreList);

export default VisibleChoreList;
