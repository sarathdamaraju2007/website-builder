import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddElement, BuilderElementForStore } from "../types";

const initialState: Record<string, BuilderElementForStore> = {
  __parent__: {
    tag: "div",
    id: "__parent__",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<AddElement>) => {
      const {
        payload: { parentId, ...newElement },
      } = action;

      let parent = state[parentId];

      if (parent) {
        state = {
          ...state,
          [parent.id]: {
            ...parent,
            children: [...(parent.children ?? []), newElement.id],
          },
          [newElement.id.toString()]: newElement,
        };
      }
    },
  },
});

export const { addElement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
