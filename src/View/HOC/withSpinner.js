// withSpinner.js

import React from "react";
import LoadingIndicator from "../Components/LoadingIndicator";

const withSpinner = Comp => props => {
  if (props.items.length == 0) {
    return <LoadingIndicator />;
  } else {
    return <Comp {...props} />;
  }
};

export default withSpinner;
