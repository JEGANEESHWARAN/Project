// userAction.js
import { ADD_USER, REMOVE_USER, UPDATE_USER_DETAILS } from './userActionTypes';

// Action creator for adding a user
export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

// Action creator for removing a user by index
export const removeUser = (index) => ({
  type: REMOVE_USER,
  payload: index,
});

// Action creator for updating user details by index
export const updateUserDetails = (index, updatedUser) => ({
  type: UPDATE_USER_DETAILS,
  payload: { index, updatedUser },
});
