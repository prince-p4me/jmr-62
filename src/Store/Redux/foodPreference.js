import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    ftypeRequest: ["parameters"],
    ftypePending: null,
    ftypeSuccess: ["ftype"],
    ftypeFailure: null
});

export const FtypeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    ftype: null,
    fetching: false,
    error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const ftypePending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const ftypeSuccess = (state, { ftype }) => ({
    ...state,
    ftype,
    fetching: false
});

// failed to get the avatar
export const ftypeFailure = state => ({
    ...state,
    ftype: [],
    error: true,
    fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.FTYPE_PENDING]: ftypePending,
    [Types.FTYPE_SUCCESS]: ftypeSuccess,
    [Types.FTYPE_FAILURE]: ftypeFailure
});
