import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "__root__";

export const activeElementSlice = createSlice({
  name: "activeElement",
  initialState,
  reducers: {
    setActiveElement: (
      _,
      action: PayloadAction<{ activeElementId: string }>
    ) => {
      const {
        payload: { activeElementId },
      } = action;

      return activeElementId;
    },
  },
});

export const { setActiveElement } = activeElementSlice.actions;

export const activeElementReducer = activeElementSlice.reducer;
