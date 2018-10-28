import { ADD_MEMBER, REMOVE_MEMBER } from './actionTypes';

export function addMember(value) {
  return {
    type: ADD_MEMBER,
    member: value,
  };
}

export function removeMember(value) {
  return {
    type: REMOVE_MEMBER,
    member: value,
  };
}
