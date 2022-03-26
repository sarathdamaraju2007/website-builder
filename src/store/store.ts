import { configureStore } from "@reduxjs/toolkit";
import { builderReducer } from "../slice";

export const store = configureStore({
  reducer: {
    builderConfig: builderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
