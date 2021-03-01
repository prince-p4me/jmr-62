import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addToCart: ["products"],
  incQty: ["product"],
  decQty: ["product"],
  earliestDeliveryRequest: ["parameters"],
  earliestDeliveryPending: null,
  earliestDeliverySuccess: ["response"],
  earliestDeliveryFailure: null,
  deliveryDatesRequest: ["parameters"],
  deliveryDatesPending: null,
  deliveryDatesSuccess: ["response"],
  deliveryDatesFailure: null,
  setDeliveryDate: ["parameters"],
  timeSlotsRequest: ["parameters"],
  timeSlotsPending: null,
  timeSlotsSuccess: ["response"],
  timeSlotsFailure: null,
  setTimeSlot: ["parameters"],
  emptyCart: null,
  incBagQty: ["sourcingLocationId"],
  decBagQty: ["sourcingLocationId"],
  setBagType: ["parameters"],
  setGiftingType: ["parameters"],
  minValueDeliveryRequest: ["parameters"],
  minValueDeliveryPending: null,
  minValueDeliverySuccess: ["response"],
  minValueDeliveryFailure: null
});

export const CartTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  sections: [],
  deliveryDates: [],
  timeSlots: []
  // sections: [
  //   {
  //     sourcingLocationName: "Kolkata",
  //     products: [
  //       {
  //         shopId: "2",
  //         shopName: "Delhi Tea",
  //         productId: "9",
  //         name: "Assam Tea",
  //         city: "Kolkata",
  //         price: "395",
  //         discount: "0",
  //         discountType: "percent",
  //         handlingCharges: "10",
  //         currentStock: "100",
  //         rating: "0",
  //         reviewCount: "0",
  //         quantity: 2,
  //         sourcingLocationId: "5"
  //       }
  //     ],
  //     sourcingLocationId: "5"
  //   },
  //   {
  //     sourcingLocationId: "1",
  //     sourcingLocationName: "Delhi Gurgaon Noida Ghaziabad",
  //     products: [
  //       {
  //         shopId: "3",
  //         shopName: "Delhi Tea",
  //         productId: "8",
  //         name: "Assam Tea",
  //         city: "Delhi Gurgaon Noida Ghaziabad",
  //         price: "276",
  //         discount: "0",
  //         discountType: "percent",
  //         handlingCharges: "10",
  //         currentStock: "100",
  //         rating: "0",
  //         reviewCount: "0",
  //         sourcingLocationId: "1",
  //         quantity: 1
  //       }
  //     ]
  //   }
  // ]
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const addToCart = (state, { products }) => {
  var sections = state.sections;
  products.forEach(product => {
    let section = sections.find(
      section => section.sourcingLocationId === product.sourcingLocationId
    );
    //Section Found
    if (section) {
      let foundProduct = section.products.find(
        prod => prod.productId === product.productId
      );
      let updatedSection;
      if (foundProduct) {
        updatedSection = {
          ...section,
          products: section.products.map(pdt =>
            pdt.productId == product.productId
              ? { ...pdt, quantity: pdt.quantity + product.quantity }
              : pdt
          )
        };
      } else {
        updatedSection = {
          ...section,
          products: [...section.products, product]
        };
      }
      sections = sections.map(section =>
        section.sourcingLocationId == updatedSection.sourcingLocationId
          ? updatedSection
          : section
      );
    } else {
      let newSection = {
        sourcingLocationId: product.sourcingLocationId,
        sourcingLocationName: product.city,
        products: [product],
        bagQuantity: 0
      };
      sections = [...sections, newSection];
    }
  });
  return { ...state, sections: sections };
};

export const incQty = (state, { product }) => {
  var sections = state.sections;
  let section = sections.find(
    section => section.sourcingLocationId === product.sourcingLocationId
  );
  //Section Found

  let updatedSection = {
    ...section,
    products: section.products.map(pdt =>
      pdt.productId == product.productId
        ? { ...pdt, quantity: pdt.quantity + 1 }
        : pdt
    )
  };

  sections = sections.map(section =>
    section.sourcingLocationId == updatedSection.sourcingLocationId
      ? updatedSection
      : section
  );

  return { ...state, sections: sections };
};

export const decQty = (state, { product }) => {
  var sections = state.sections;
  let section = sections.find(
    section => section.sourcingLocationId === product.sourcingLocationId
  );
  if (section.products.length == 1 && product.quantity == 1) {
    let sectionIndex = sections.findIndex(
      section => section.sourcingLocationId === product.sourcingLocationId
    );
    sections = [
      ...sections.slice(0, sectionIndex),
      ...sections.slice(sectionIndex + 1)
    ];
  } else {
    //Section Found
    let updatedSection;
    if (product.quantity > 1) {
      updatedSection = {
        ...section,
        products: section.products.map(pdt =>
          pdt.productId == product.productId && pdt.shopId == product.shopId
            ? { ...pdt, quantity: pdt.quantity - 1 }
            : pdt
        )
      };
    } else {
      let productIndex = section.products.findIndex(
        prod =>
          prod.productId === product.productId && prod.shopId === product.shopId
      );

      updatedSection = {
        ...section,
        products: [
          ...section.products.slice(0, productIndex),
          ...section.products.slice(productIndex + 1)
        ]
      };
    }

    sections = sections.map(section =>
      section.sourcingLocationId == updatedSection.sourcingLocationId
        ? updatedSection
        : section
    );
  }

  return { ...state, sections: sections };
};
/* ------------- Hookup Reducers To Types ------------- */
export const earliestDeliveryPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const earliestDeliverySuccess = (state, { response }) => {
  var sections = state.sections;
  response.earliestDeliveryDateTime.forEach(dateTime => {
    let section = sections.find(
      section => section.sourcingLocationId === dateTime.sourcingLocationId
    );

    //Section Found
    let updatedSection;

    updatedSection = {
      ...section,
      deliveryDate: dateTime.estimatedDate,
      deliveryTime: dateTime.TimeSlot
    };

    sections = sections.map(section =>
      section.sourcingLocationId == updatedSection.sourcingLocationId
        ? updatedSection
        : section
    );
  });
  return {
    ...state,
    sections: sections,
    fetching: false
  };
};

// failed to get the avatar
export const earliestDeliveryFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const deliveryDatesPending = state => ({
  ...state,
  deliveryDates: [],
  fetching: true
});

// successful avatar lookup
export const deliveryDatesSuccess = (state, { response }) => ({
  ...state,
  deliveryDates: response.deliveryDatesForLocation,
  fetching: false
});

// failed to get the avatar
export const deliveryDatesFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const setDeliveryDate = (state, { parameters }) => {
  var sections = state.sections;
  let section = sections.find(
    section => section.sourcingLocationId === parameters.sourcingLocationId
  );
  //Section Found

  let updatedSection = {
    ...section,
    deliveryDate: parameters.date
  };

  sections = sections.map(section =>
    section.sourcingLocationId == updatedSection.sourcingLocationId
      ? updatedSection
      : section
  );

  return { ...state, sections: sections };
};

export const timeSlotsPending = state => ({
  ...state,
  timeSlots: [],
  fetching: true
});

// successful avatar lookup
export const timeSlotsSuccess = (state, { response }) => ({
  ...state,
  timeSlots: response.getTimeSlotsForDate,
  fetching: false
});

// failed to get the avatar
export const timeSlotsFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const emptyCart = state => ({
  ...state,
  sections: []
});

export const setTimeSlot = (state, { parameters }) => {
  var sections = state.sections;
  let section = sections.find(
    section => section.sourcingLocationId === parameters.sourcingLocationId
  );
  //Section Found

  let updatedSection = {
    ...section,
    deliveryTime: parameters.timeSlot
  };

  sections = sections.map(section =>
    section.sourcingLocationId == updatedSection.sourcingLocationId
      ? updatedSection
      : section
  );

  return { ...state, sections: sections };
};

export const setBagType = (state, { parameters }) => {
  var sections = state.sections;
  let section = sections.find(
    section => section.sourcingLocationId === parameters.sourcingLocationId
  );
  //Section Found

  let updatedSection = {
    ...section,
    bagType: parameters.bagType,
    bagTypeId: parameters.bagType.id
  };

  sections = sections.map(section =>
    section.sourcingLocationId == updatedSection.sourcingLocationId
      ? updatedSection
      : section
  );

  return { ...state, sections: sections };
};

export const incBagQty = (state, { sourcingLocationId }) => {
  var sections = state.sections;
  let section = sections.find(
    section => section.sourcingLocationId === sourcingLocationId
  );
  //Section Found

  let updatedSection = {
    ...section,
    bagQuantity: section.bagQuantity ? section.bagQuantity + 1 : 1
  };

  sections = sections.map(section =>
    section.sourcingLocationId == updatedSection.sourcingLocationId
      ? updatedSection
      : section
  );

  return { ...state, sections: sections };
};

export const decBagQty = (state, { sourcingLocationId }) => {
  var sections = state.sections;
  let section = sections.find(
    section => section.sourcingLocationId === sourcingLocationId
  );
  //Section Found

  let updatedSection = {
    ...section,
    bagQuantity: section.bagQuantity - 1
  };

  sections = sections.map(section =>
    section.sourcingLocationId == updatedSection.sourcingLocationId
      ? updatedSection
      : section
  );

  return { ...state, sections: sections };
};

export const setGiftingType = (state, { parameters }) => {
  var sections = state.sections;
  let section = sections.find(
    section => section.sourcingLocationId === parameters.sourcingLocationId
  );
  //Section Found

  let updatedSection = {
    ...section,
    giftingType: parameters.giftingType,
    giftTypeId: parameters.giftingType.id,
    giftQuantity: 1
  };

  sections = sections.map(section =>
    section.sourcingLocationId == updatedSection.sourcingLocationId
      ? updatedSection
      : section
  );

  return { ...state, sections: sections };
};

export const minValueDeliveryPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const minValueDeliverySuccess = (state, { response }) => {
  var sections = state.sections;
  response.minimumValueForDelivery.forEach(rec => {
    let section = sections.find(
      section => section.sourcingLocationId === rec.sourcingLocationId
    );

    //Section Found
    let updatedSection;

    updatedSection = {
      ...section,
      minValue: rec.normal
    };

    sections = sections.map(section =>
      section.sourcingLocationId == updatedSection.sourcingLocationId
        ? updatedSection
        : section
    );
  });
  return {
    ...state,
    sections: sections,
    fetching: false
  };
};

// failed to get the avatar
export const minValueDeliveryFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

// failed to get the avatar

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: addToCart,
  [Types.INC_QTY]: incQty,
  [Types.DEC_QTY]: decQty,
  [Types.EARLIEST_DELIVERY_PENDING]: earliestDeliveryPending,
  [Types.EARLIEST_DELIVERY_SUCCESS]: earliestDeliverySuccess,
  [Types.EARLIEST_DELIVERY_FAILURE]: earliestDeliveryFailure,
  [Types.DELIVERY_DATES_PENDING]: deliveryDatesPending,
  [Types.DELIVERY_DATES_SUCCESS]: deliveryDatesSuccess,
  [Types.DELIVERY_DATES_FAILURE]: deliveryDatesFailure,
  [Types.SET_DELIVERY_DATE]: setDeliveryDate,
  [Types.TIME_SLOTS_PENDING]: timeSlotsPending,
  [Types.TIME_SLOTS_SUCCESS]: timeSlotsSuccess,
  [Types.TIME_SLOTS_FAILURE]: timeSlotsFailure,
  [Types.SET_TIME_SLOT]: setTimeSlot,
  [Types.EMPTY_CART]: emptyCart,
  [Types.INC_BAG_QTY]: incBagQty,
  [Types.DEC_BAG_QTY]: decBagQty,
  [Types.SET_BAG_TYPE]: setBagType,
  [Types.SET_GIFTING_TYPE]: setGiftingType,
  [Types.MIN_VALUE_DELIVERY_PENDING]: minValueDeliveryPending,
  [Types.MIN_VALUE_DELIVERY_SUCCESS]: minValueDeliverySuccess,
  [Types.MIN_VALUE_DELIVERY_FAILURE]: minValueDeliveryFailure
});
