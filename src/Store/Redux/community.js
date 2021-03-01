import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  communitiesRequest: ["parameters"],
  communitiesPending: null,
  communitiesSuccess: ["communities"],
  communitiesFailure: null
});

export const CommunityTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  communities: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const communitiesPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const communitiesSuccess = (state, { communities }) => ({
  ...state,
  communities,
  fetching: false
});

// failed to get the avatar
export const communitiesFailure = state => ({
  ...state,
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COMMUNITIES_PENDING]: communitiesPending,
  [Types.COMMUNITIES_SUCCESS]: communitiesSuccess,
  [Types.COMMUNITIES_FAILURE]: communitiesFailure
});
