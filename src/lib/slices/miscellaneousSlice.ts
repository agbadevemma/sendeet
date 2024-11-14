import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MiscellaneousState {
  isModalOpen: boolean;
  switchToBasicInfo: boolean;
}

const initialState: MiscellaneousState = {
  isModalOpen: false,
  switchToBasicInfo: false,
};

const miscellaneousSlice = createSlice({
  name: "miscellaneous",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleBasicInfo: (state, action: PayloadAction<boolean>) => {
      state.switchToBasicInfo = action.payload;
    },
  },
});

export const { openModal, closeModal, toggleModal, toggleBasicInfo } =
  miscellaneousSlice.actions;

export default miscellaneousSlice.reducer;
