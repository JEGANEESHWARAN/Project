// userReducer.js

// Initial state for the user reducer
const initialState = {
    users: [],
  };
  
  // User reducer function
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter((_, index) => index !== action.payload),
        };
      case 'UPDATE_USER_DETAILS':
        return {
          ...state,
          users: state.users.map((user, index) =>
            index === action.payload.index ? action.payload.updatedUser : user
          ),
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  // Selector function to extract users from state
  export const selectUsers = (state) => state.users.users;
  