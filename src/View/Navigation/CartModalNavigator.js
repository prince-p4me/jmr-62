import { createStackNavigator } from 'react-navigation-stack';;
import { Platform } from "react-native";
import Cart from "../Cart/Cart.container";
import SelectDeliveryDate from "../Cart/SelectDeliveryDate.container";
import SelectTimeSlot from "../Cart/SelectTimeSlot.container";
import SelectBagType from "../Cart/SelectBagType.container";
import SelectGiftingType from "../Cart/SelectGiftingType.container";
import SelectOption from "../Product/SelectOption.container";
import SetPreferenceText from "../Product/SetPreferenceText.container";
import MultiSelect from "../Product/MultiSelect.container";
import { Colors } from "../Themes";
import AddAddressForm from "../Address/AddAddress.container";

// import Cart from "./CartModalNavigator";
import OrderSummary from "../Order/OrderSummary.container";
import PaymentMethods from "../Order/PaymentMethods.container";
import Address from "../Address/Address.container";
// import SearchProducts from "../Product/SearchProducts.container";
import PaymentGateway from "../Order/PaymentGateway";
import LoginNavigator from "./LoginNavigator";

const CartModalNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: {
        title: "Cart",
        header: null
      }
    },
    SelectDeliveryDate: {
      screen: SelectDeliveryDate,
      navigationOptions: {
        title: "Select Delivery Date"
      }
    },
    SelectTimeSlot: {
      screen: SelectTimeSlot,
      navigationOptions: {
        title: "Select Time Slot"
      }
    },
    SelectBagType: {
      screen: SelectBagType,
      navigationOptions: {
        title: "Select Bag"
      }
    },
    SelectGiftingType: {
      screen: SelectGiftingType,
      navigationOptions: {
        title: "Select Gifting Option"
      }
    },
    SetPreferenceText: {
      screen: SetPreferenceText,
      navigationOptions: {
        title: "Set Preferences"
      }
    },
    SelectOption: {
      screen: SelectOption,
      navigationOptions: {
        title: "Select Option"
      }
    },
    MultiSelect: {
      screen: MultiSelect,
      navigationOptions: {
        title: "Select Option"
      }
    },
    ShippingAddress: {
      screen: Address,
      navigationOptions: {
        title: "Shipping Address",
        header: null
      }
    },
    AddAddress: {
      screen: AddAddressForm,
      navigationOptions: {
        title: "Add Address",
        header: null
      }
    },
    BillingAddress: {
      screen: Address,
      navigationOptions: {
        title: "Billing Address",
        header: null
      }
    },
    OrderSummary: {
      screen: OrderSummary,
      navigationOptions: {
        title: "Order Summary",
        header: null
      }
    },
    PaymentMethods: {
      screen: PaymentMethods,
      navigationOptions: {
        title: "Payment"
      }
    },
    PaymentGateway: {
      screen: PaymentGateway,
      navigationOptions: {
        title: "Pay"
      }
    }
  },
  {
    //   initialRouteName: "Cart",
    //   mode: "modal",
    //   navigationOptions: ({ navigation }) => ({
    //     headerTintColor: Colors.ember,
    //     headerTitleStyle: {
    //       ...Platform.select({
    //         ios: { fontFamily: "Arial",fontSize:14 },
    //         android: { fontFamily: "Roboto",fontSize:14 }
    //       })
    //     }
    //   })
    // headerMode: "none"
  }
);

export default CartModalNavigator;
