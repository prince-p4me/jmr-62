import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    pincodeRequest: ["parameters"],
    pincodePending: null,
    pincodeSuccess: ["pincode"],
    pincodeFailure: null
});

export const PincodeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    pincode: null,
    fetching: false,
    error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const pincodePending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const pincodeSuccess = (state, { pincode }) => ({
    ...state,
    pincode,
    fetching: false
});

// failed to get the avatar
export const pincodeFailure = state => ({
    ...state,
    pincode: null,
    error: true,
    fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.PINCODE_PENDING]: pincodePending,
    [Types.PINCODE_SUCCESS]: pincodeSuccess,
    [Types.PINCODE_FAILURE]: pincodeFailure
});