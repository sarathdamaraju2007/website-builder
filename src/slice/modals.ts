import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalType {
  ColumnAddModal = "showColumnAddModal",
  ColumnManageModal = "showColumnManageModal",
  ElementsManageModal = "showElementsManageModal",
  ElementsAddModal = "showElementsAddModal",
}

const initialState: Record<string, boolean> = {
  [ModalType.ColumnAddModal]: false,
  [ModalType.ColumnManageModal]: false,
  [ModalType.ElementsAddModal]: false,
  [ModalType.ElementsManageModal]: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleView: (
      state,
      action: PayloadAction<{ modalType: ModalType; visibility: boolean }>
    ) => {
      const {
        payload: { modalType, visibility = false },
      } = action;

      return {
        ...state,
        [modalType]: visibility,
      };
    },
  },
});

export const { toggleView } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
