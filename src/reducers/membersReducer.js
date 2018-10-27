import { 
  ADD_MEMBER, 
  REMOVE_MEMBER 
} from '../actions/actionTypes';

const initialState = {
  members: []
}

export default function MembersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.member]
      };
    case REMOVE_MEMBER:
      return {
        ...state,
        members: state.members.filter( 
          (member) => {
            return member.id !== action.member
          }
        )
      };
    default:
      return state;
  }
};