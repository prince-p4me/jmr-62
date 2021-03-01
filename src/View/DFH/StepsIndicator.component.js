import React from "react";
import StepIndicator from "react-native-step-indicator";
const labels = ["From", "To", "Items", "Preferences", "Summary", "Pay"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#27818e",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#27818e",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#27818e",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#27818e",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#27818e",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#27818e"
};
const StepsIndicator = ({ currentPosition }) => (
  <StepIndicator
    currentPosition={currentPosition}
    customStyles={customStyles}
    stepCount={6}
    labels={labels}
  />
);

export default StepsIndicator;
