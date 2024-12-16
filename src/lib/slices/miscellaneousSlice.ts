import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MiscellaneousState {
  isModalOpen: boolean;
  switchToBasicInfo: boolean;
  onboarding:null | "welcome" | "step1" | "step2" | "step3"| "step4"|"completed";
  explore:null | "credit" | "startcampaign" | "singlecontact" | "bulkcontact"| "sendcampaign";
}

const initialState: MiscellaneousState = {
  isModalOpen: false,
  switchToBasicInfo: false,
  onboarding:null,
  explore: null, 
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
      action: PayloadAction<null | "welcome" | "step1" | "step2" | "step3"| "step4"|"completed">
    ) => {
      state.onboarding = action.payload;
    },
    setExplore: (
      state,
      action: PayloadAction<null | "credit" | "startcampaign" | "singlecontact" | "bulkcontact"| "sendcampaign">
    ) => {
      state.explore = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  toggleModal,
  toggleBasicInfo,
  setOnboarding,
  setExplore
} = miscellaneousSlice.actions;

export default miscellaneousSlice.reducer;
