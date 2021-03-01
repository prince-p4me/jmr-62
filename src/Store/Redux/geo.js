import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  countriesRequest: ["parameters"],
  countriesPending: null,
  countriesSuccess: ["countries"],
  countriesFailure: null,
  statesRequest: ["countryId"],
  statesPending: null,
  statesSuccess: ["states"],
  statesFailure: null,
  citiesRequest: ["stateId"],
  citiesPending: null,
  citiesSuccess: ["cities"],
  citiesFailure: null
});

export const GeoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  countries: [],
  states: [],
  cities: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const countriesPending = state => ({
  ...state,
  countries: [],
  fetching: true
});

// successful avatar lookup
export const countriesSuccess = (state, { countries }) => {
  return {
    ...state,
    countries,
    fetching: false
  };
};

// failed to get the avatar
export const countriesFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const statesPending = state => ({
  ...state,
  states: [],
  fetching: true
});

// successful avatar lookup
export const statesSuccess = (state, { states }) => {
  return {
    ...state,
    states,
    fetching: false
  };
};

// failed to get the avatar
export const statesFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const citiesPending = state => ({
  ...state,
  cities: [],
  fetching: true
});

// successful avatar lookup
export const citiesSuccess = (state, { cities }) => {
  return {
    ...state,
    cities,
    fetching: false
  };
};

// failed to get the avatar
export const citiesFailure = state => ({
  ...state,
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNTRIES_PENDING]: countriesPending,
  [Types.COUNTRIES_SUCCESS]: countriesSuccess,
  [Types.COUNTRIES_FAILURE]: countriesFailure,
  [Types.STATES_PENDING]: statesPending,
  [Types.STATES_SUCCESS]: statesSuccess,
  [Types.STATES_FAILURE]: statesFailure,
  [Types.CITIES_PENDING]: citiesPending,
  [Types.CITIES_SUCCESS]: citiesSuccess,
  [Types.CITIES_FAILURE]: citiesFailure
});
