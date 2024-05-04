import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    jobs: [],
    error: null,
    hasMore: true, 
    filters: {
      minExperience: '',
      companyName: '',
      location: '',
      remote: '',
      techStack: '',
      role: '',
      minBasePay: ''
    }
  };
const jobSlice = createSlice(
    {
        name:"job",
        initialState,
        reducers:{
              fetchJobsSuccess(state, action) {
                state.jobs = [...state.jobs, ...action.payload.jobs];
                state.hasMore = action.payload.jobs.length > 0;
                state.loading = false;
              },
              setFilters(state, action) {
                state.filters = { ...state.filters, ...action.payload };
              },
              resetFilters(state) {
                state.filters = initialState.filters;
              }
        }
    }
)
export const { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure, setFilters, resetFilters } = jobSlice.actions;

export default jobSlice.reducer