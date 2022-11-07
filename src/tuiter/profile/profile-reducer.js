import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';
const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.bio = action.payload.bio;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = action.payload.dateOfBirth;
        },
    }
});

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer;