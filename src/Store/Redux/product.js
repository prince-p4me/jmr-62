import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  productsRequest: ["parameters"],
  productsPending: null,
  productsSuccess: ["products"],
  productsFailure: null,
  productDetailRequest: ["parameters"],
  productDetailPending: null,
  productDetailSuccess: ["product"],
  productDetailFailure: null,
  searchProductsRequest: ["parameters"],
  searchProductsPending: null,
  searchProductsSuccess: ["searchProducts"],
  searchProductsFailure: null,
  resetProductSearch: null,
  setProductOptions: ["parameters"],
  setPreferenceText: ["preferenceText"],
  setProductColor: ["color"]
});

export const ProductTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  products: [],
  searchProducts: [],
  product: null,
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const productsPending = state => ({
  ...state,
  products: [],
  fetching: true
});

// successful avatar lookup
export const productsSuccess = (state, { products }) => ({
  ...state,
  products,
  fetching: false
});

// failed to get the avatar
export const productsFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const productDetailPending = state => ({
  ...state,
  product: null,
  fetching: true
});

// successful avatar lookup
export const productDetailSuccess = (state, { product }) => ({
  ...state,
  product,
  fetching: false
});

// failed to get the avatar
export const productDetailFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const searchProductsPending = state => ({
  ...state,
  fetching: true
});

export const searchProductsSuccess = (state, { searchProducts }) => ({
  ...state,
  searchProducts,
  fetching: false
});

export const searchProductsFailure = state => ({
  ...state,
  searchProducts: [],
  error: true,
  fetching: false
});

export const resetProductSearch = state => ({
  ...state,
  searchProducts: [],
  error: false,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const setProductOptions = (state, { parameters }) => ({
  ...state,
  product: {
    ...state.product,
    options: state.product.options.map(option =>
      option.no == parameters.no
        ? { ...option, selectedValue: parameters.selectedValue }
        : option
    )
  }
});

export const setPreferenceText = (state, { preferenceText }) => ({
  ...state,
  preferenceText
});

export const setProductColor = (state, { color }) => ({
  ...state,
  product: {
    ...state.product,
    selectedColor: color
  }
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCTS_PENDING]: productsPending,
  [Types.PRODUCTS_SUCCESS]: productsSuccess,
  [Types.PRODUCTS_FAILURE]: productsFailure,
  [Types.PRODUCT_DETAIL_PENDING]: productDetailPending,
  [Types.PRODUCT_DETAIL_SUCCESS]: productDetailSuccess,
  [Types.PRODUCT_DETAIL_FAILURE]: productDetailFailure,
  [Types.SEARCH_PRODUCTS_PENDING]: searchProductsPending,
  [Types.SEARCH_PRODUCTS_SUCCESS]: searchProductsSuccess,
  [Types.SEARCH_PRODUCTS_FAILURE]: searchProductsFailure,
  [Types.RESET_PRODUCT_SEARCH]: resetProductSearch,
  [Types.SET_PRODUCT_OPTIONS]: setProductOptions,
  [Types.SET_PREFERENCE_TEXT]: setPreferenceText,
  [Types.SET_PRODUCT_COLOR]: setProductColor
});
