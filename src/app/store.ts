import {configureStore} from "@reduxjs/toolkit";
import {doorPhoneReducer} from "../containers/DoorPhone/doorPhoneSlice";

export const store = configureStore({
  reducer: {
    doorPhone: doorPhoneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;