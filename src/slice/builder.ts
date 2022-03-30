import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuilderElementForStore } from "../types";

const initialState: Record<string, BuilderElementForStore> = {
  __root__: {
    tag: "__root__",
    id: "__root__",
    parentId: "0",
    children: [],
    createdAt: 0,
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
          },
        };
      }
    },
    editElement: (state, action: PayloadAction<BuilderElementForStore>) => {
      const { payload } = action;

      const { id } = state[payload.id];

      if (id) {
        return {
          ...state,
          [id]: payload,
        };
      }
    },
  },
});

export const { addElement, editElement } = builderSlice.actions;

export const builderReducer = builderSlice.reducer;
