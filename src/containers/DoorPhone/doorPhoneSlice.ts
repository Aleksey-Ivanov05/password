import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface DoorPhoneState {
  value: string
}

const initialState: DoorPhoneState = {
  value: '',
}

export const doorPhoneSlice = createSlice({
  name: 'doorPhone',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    removeSymbol: (state) => {
      state.value = state.value.slice(0, -1);
    },
  }
})

export const doorPhoneReducer = doorPhoneSlice.reducer;
export const {add, removeSymbol} = doorPhoneSlice.actions;