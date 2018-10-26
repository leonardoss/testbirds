import { ADD_MEMBER, REMOVE_MEMBER } from './actionTypes';

export function addMember(value) {
  console.log('action addMember', value);
  return {
    type: ADD_MEMBER,
    member: value
  };
}

export function removeMember(value) {
  console.log('action removeMember', value);
  return {
    type: REMOVE_MEMBER,
    member: value
  };
}