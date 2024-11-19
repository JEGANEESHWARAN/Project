import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: {
    tests: [], // Store test data here
  },
  reducers: {
    addTest(state, action) {
      state.tests.push(action.payload);
    },
    deleteTest(state, action) {
      state.tests = state.tests.filter(test => test.id !== action.payload);
    },
    // Other reducers if necessary
  },
});

export const { addTest, deleteTest } = testSlice.actions;
export default testSlice.reducer;
