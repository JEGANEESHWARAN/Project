// store.js
import { configureStore } from '@reduxjs/toolkit';
import testReducer from './testSlice'; // Adjust the path if necessary
import quizReducer from './quizSlice';
import userReducer from './userReducer';
export const store = configureStore({
  reducer: {
    test: testReducer,
    quiz: quizReducer,
    users: userReducer,
  },
});
