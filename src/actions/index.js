import { CLICK_UPDATE_VALUE, ADD_MEMBER, REMOVE_MEMBER } from './actionTypes';

export function clickButton(value) {
  return {
    type: CLICK_UPDATE_VALUE,
    newValue: value
  };
}

export function addMember(value) {
  return {
    type: ADD_MEMBER,
    newMember: value
  };
}