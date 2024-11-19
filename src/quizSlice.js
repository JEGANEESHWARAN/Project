import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: []
  },
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    }
  }
});

export const { setQuestions } = quizSlice.actions;

export const selectQuestions = (state) => state.quiz.questions;

export default quizSlice.reducer;
