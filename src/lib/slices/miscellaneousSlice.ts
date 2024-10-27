import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MiscellaneousState {
  isModalOpen: boolean;
}

const initialState: MiscellaneousState = {
  isModalOpen: false,
};

const miscellaneousSlice = createSlice({
  name: 'miscellaneous',
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
  },
});

export const { openModal, closeModal, toggleModal } = miscellaneousSlice.actions;

export default miscellaneousSlice.reducer;
