import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MiscellaneousState {
  isModalOpen: boolean;
  switchToBasicInfo: boolean;
  onboarding: "" | "welcome" | "step1" | "step2" | "step3"| "step4"|"completed";
}

const initialState: MiscellaneousState = {
  isModalOpen: false,
  switchToBasicInfo: false,
  onboarding: "",
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
    setOnboarding: (
      state,
      action: PayloadAction<"" | "welcome" | "step1" | "step2" | "step3"| "step4"|"completed">
    ) => {
      state.onboarding = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  toggleModal,
  toggleBasicInfo,
  setOnboarding,
} = miscellaneousSlice.actions;

export default miscellaneousSlice.reducer;
