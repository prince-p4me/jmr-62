import { createStackNavigator } from 'react-navigation-stack';;
import DfhPreference from "../DFH/DfhPreference.container";
import DeliveryDate from "../DFH/DeliveryDate.container";
import PickupDate from "../DFH/PickupDate.container";
import PickupTimeSlot from "../DFH/PickupTimeSlot.container";
import DeliveryTimeSlot from "../DFH/DeliveryTimeSlot.container";
import DfhCentres from "../DFH/DfhCentres.container";

const CartModalNavigator = createStackNavigator(
  {
    DfhPreference: {
      screen: DfhPreference,
      navigationOptions: {
        title: "Preferences"
      }
    },
    DfhDeliveryDate: {
      screen: DeliveryDate,
      navigationOptions: {
        title: "Select Delivery Date"
      }
    },
    DfhDeliveryTimeSlot: {
      screen: DeliveryTimeSlot,
      navigationOptions: {
        title: "Select Time Slot"
      }
    },
    DfhPickupDate: {
      screen: PickupDate,
      navigationOptions: {
        title: "Select Pickup Date"
      }
    },
    DfhPickupTimeSlot: {
      screen: PickupTimeSlot,
      navigationOptions: {
        title: "Select Time Slot"
      }
    },
    DfhCentres: {
      screen: DfhCentres,
      navigationOptions: {
        title: "Select Dfh Centres"
      }
    }
  },
  {
    initialRouteName: "DfhPreference",
    mode: "modal",
    headerMode: "none"
  }
);

export default CartModalNavigator;
