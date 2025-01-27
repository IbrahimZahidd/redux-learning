// This file will contain anything (i.e. action, reducer, state), related to counterSlice

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// State
interface CounterState {
  value: number;
}

// value will now always be zero whenever state is initialized
const initialState: CounterState = {
  value: 0,
};

// Create slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // makes a state copy bts, makes changes in that and then update the original
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      // makes a state copy bts, makes changes in that and then update the original
      state.value -= 1;
    },
    incrementByAmountMethod1: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementByAmountMethod2: (
      state,
      action: PayloadAction<{ value: number }>
    ) => {
      state.value += action.payload.value;
    },
    reset: (state) => {
      state.value = 0;
    },
  },

  //builders: allows us to add cases to reducers
  // Async Thunk let's us get access to extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

// For async actions i.e. api data fetching
export const incrementAsync = createAsyncThunk(
  //name of the action
  "counter/incrementAsync",
  async (amount: number) => {
    // simulate async action i.e. waiting for one second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

// creating actions
export const {
  increment,
  decrement,
  incrementByAmountMethod1,
  incrementByAmountMethod2,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
