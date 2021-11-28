import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}

const initialState = {
  value: ["Selena"],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addReservation: (state: ReservationState, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
