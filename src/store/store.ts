import { configureStore } from "@reduxjs/toolkit";
import { builderReducer } from "../slice";
import { activeElementReducer } from "../slice/active-element";
import { modalReducer } from "../slice/modals";

export const store = configureStore({
  reducer: {
    builderConfig: builderReducer,
    modalReducer,
    activeElement: activeElementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
