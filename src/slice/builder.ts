import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuilderElementForStore } from "../types";

const initialState: Record<string, BuilderElementForStore> = {
  __root__: {
    tag: "__root__",
    id: "__root__",
    parentId: "0",
    children: [],
  },
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<BuilderElementForStore>) => {
      const {
        payload: { parentId = "__root__", ...newElement },
      } = action;

      if (parent) {
        return {
          ...state,
          [newElement.id.toString()]: {
            parentId,
            ...newElement,
            children: [],
          },
        };
      }
    },
  },
});

export const { addElement } = builderSlice.actions;

export const builderReducer = builderSlice.reducer;
