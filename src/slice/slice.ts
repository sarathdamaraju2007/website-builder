import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddElement, BuilderElementForStore } from "../types";

const initialState: Record<string, BuilderElementForStore> = {
  __parent__: {
    tag: "div",
    id: "__parent__",
  },
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<AddElement>) => {
      const {
        payload: { parentId, ...newElement },
      } = action;

      let parent = state[parentId];
      if (parent) {
        return {
          ...state,
          [parent.id]: {
            ...parent,
            childrenKeys: [...(parent.childrenKeys ?? []), newElement.id],
          },
          [newElement.id.toString()]: newElement,
        };
      }
    },
  },
});

export const { addElement } = builderSlice.actions;

export const builderReducer = builderSlice.reducer;
