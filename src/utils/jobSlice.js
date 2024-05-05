import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    error: null,
    hasMore: true,
    filters: {
      minExperience: '',
      companyName: '',
      location: [],
      role: [],
      noOfEmployees: [],
      techStack: [],
      minBasePay: ''
    }
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        fetchJobsSuccess(state, action) {
            state.jobs = [...state.jobs, ...action.payload.jobs];
            state.hasMore = action.payload.jobs.length > 0;
        },
        setMinExperience(state, action) {
            state.filters.minExperience = action.payload;
        },
        setCompanyName(state, action) {
            state.filters.companyName = action.payload;
        },
        setLocation(state, action) {
            state.filters.location = action.payload;
        },
        setRole(state, action) {
            state.filters.role = action.payload;
        },
        setNoOfEmployees(state, action) {
            state.filters.noOfEmployees = action.payload;
        },
        setTechStack(state, action) {
            state.filters.techStack = action.payload;
        },
        setMinBasePay(state, action) {
            state.filters.minBasePay = action.payload;
        },
        resetFilters(state) {
            state.filters = initialState.filters;
        }
    }
});

export const {
    fetchJobsSuccess,
    setMinExperience,
    setCompanyName,
    setLocation,
    setRole,
    setNoOfEmployees,
    setTechStack,
    setMinBasePay,
    resetFilters
} = jobSlice.actions;

export default jobSlice.reducer;
