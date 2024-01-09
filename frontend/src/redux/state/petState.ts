import { createSlice } from "@reduxjs/toolkit";

export interface PetModel {
	pet_id: number;
	pet_name: string;
	pet_specie_id: number;
	pet_breed: string;
	pet_gender_id: number;
	pet_age: number;
	new_guardian_id: number;
	prev_guardian_id: number;
    is_available_to_adopt: number;
    admission_date: string;
    adoption_date: string;
    is_deleted: boolean;
}

export interface PetState {
	pets: PetModel[];
	isLoading: boolean;
}

const initialState: PetState = {
	pets: [],
	isLoading: false,
};

export const PetSlice = createSlice({
	name: "pet",
	initialState,
	reducers: {
		getPetsFetch: (state) => {
			state.isLoading = true;
		},
		getPetsSuccess: (state, action) => {
			state.pets = action.payload;
			state.isLoading = false;
		},
		getPetsFailure: (state) => {
			state.isLoading = false;
		},
	},
});

export const { getPetsFetch, getPetsSuccess, getPetsFailure } =
	PetSlice.actions;

export default PetSlice.reducer;
