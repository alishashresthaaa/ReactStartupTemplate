import { initialFormState } from "./form.initial";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "./form.types";

export const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    SET_FORM_DATA: (state, action: PayloadAction<FormState>) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.email = action.payload.email;
      state.nationality = action.payload.nationality;
      state.gender = action.payload.gender;
      state.hobbies = action.payload.hobbies;
    },
  },
});

export const { SET_FORM_DATA } = formSlice.actions;
export default formSlice.reducer;
