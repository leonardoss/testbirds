import { ADD_MEMBER, REMOVE_MEMBER } from '../actions/actionTypes';

const initialState = {
  newValue: 'TEST'
}

export default function MembersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        newValue: action.newValue
      };
    case REMOVE_MEMBER:
      return {
        ...state
      };
    default:
      return state;
  }
};