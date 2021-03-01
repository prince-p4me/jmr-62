import Home from "../Home/Home.container";
import ShopByOptions from "../ShopBy/ShopBy.container";
import ProductList from "../Product/ProductList.container";
// import ProductDetail from "./ProductModalNavigator";
import Cart from "./CartModalNavigator";
import OrderSummary from "../Order/OrderSummary.container";
import PaymentMethods from "../Order/PaymentMethods.container";
import Address from "../Address/Address.container";
import SearchProducts from "../Product/SearchProducts.container";
import PaymentGateway from "../Order/PaymentGateway";
import CartIcon from "../Cart/CartIcon.container";
import { createStackNavigator } from 'react-navigation-stack';;
import { Colors } from "../Themes";
import React from "react";
import { View } from "native-base";
import HeaderIcon from "../Components/HeaderIcon";
import ProductDetail from "../Product/ProductDetail.container";

import { Platform } from "react-native";
import ReferralIcon from "../Components/ReferralIcon";
import OffersIcon from "../Components/OffersIcon";
import DfhNavigator from "./DfhNavigator";
import DfhScreen from "../DFH/Dfh.component";
import DfhFromNavigator from "./DfhFromNavigator";
import DfhToNavigator from "./DfhToNavigator";
import DfhPreferenceNavigator from "./DfhPreferenceNavigator";
import DfhItemNavigator from "./DfhItemNavigator";
import DfhSummary from "../DFH/DfhSummary.container";
// import PaymentGateway from "../Order/PaymentGateway";
// import PaymentMethods from "../Order/PaymentMethods.container";
import PickupLocation from "../DFH/PickupLocation.container";
import DfhFrom from "../DFH/DfhFrom.container";
import DeliveryLocation from "../DFH/DeliveryLocation.container";
import DfhTo from "../DFH/DfhTo.container";
import DfhAddItem from "../DFH/AddItem.container";
import DfhItems from "../DFH/DfhItems.container";

import DfhPreference from "../DFH/DfhPreference.container";
import DeliveryDate from "../DFH/DeliveryDate.container";
import PickupDate from "../DFH/PickupDate.container";
import PickupTimeSlot from "../DFH/PickupTimeSlot.container";
import DeliveryTimeSlot from "../DFH/DeliveryTimeSlot.container";
import DfhCentres from "../DFH/DfhCentres.container";
import WishDishScreen from '../Wishdish/index'
const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    SubCategories: {
      screen: ShopByOptions
    },
    WishDishScreen: {
      screen: WishDishScreen
    },
    ProductList: {
      screen: ProductList
    },
    ProductDetail: {
      screen: ProductDetail,
    },
    ShopBy: {
      screen: ShopByOptions
    },

    Dfh: {
      screen: DfhScreen,
      navigationOptions: {
        title: "DFH"
      }
    },
    DfhFrom: {
      screen: DfhFrom,
      navigationOptions: {
        title: "From Address"
      }
    },
    PickupLocation: {
      screen: PickupLocation,
      navigationOptions: {
        title: "Pick Up Location"
      }
    },
    DfhTo: {
      screen: DfhTo,
      navigationOptions: {
        title: "To Address"
      }
    },
    DeliveryLocation: {
      screen: DeliveryLocation,
      navigationOptions: {
        title: "Delivery Location"
      }
    },
    // DfhToNavigator: {
    //   screen: DfhToNavigator,
    //   navigationOptions: {
    //     title: "To Address"
    //   }
    // },
    DfhItems: {
      screen: DfhItems,
      navigationOptions: {
        title: "Items"
      }
    },
    DfhAddItem: {
      screen: DfhAddItem,
      navigationOptions: {
        title: "Items"
      }
    },
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
    },
    // DfhPreferenceNavigator: {
    //   screen: DfhPreferenceNavigator,
    //   navigationOptions: {
    //     title: "Preferences"
    //   }
    // },
    DfhSummary: {
      screen: DfhSummary,
      navigationOptions: {
        title: "Summary"
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

    // Cart: {
    //   screen: Cart,
    //   navigationOptions: {
    //     title: "Cart",
    //     headerRight: null
    //   }
    // },
    // ShippingAddress: {
    //   screen: Address,
    //   navigationOptions: {
    //     title: "Shipping Address"
    //   }
    // },
    // BillingAddress: {
    //   screen: Address,
    //   navigationOptions: {
    //     title: "Billing Address"
    //   }
    // },
    // OrderSummary: {
    //   screen: OrderSummary,
    //   navigationOptions: {
    //     title: "Order Summary"
    //   }
    // },
    // PaymentMethods: {
    //   screen: PaymentMethods,
    //   navigationOptions: {
    //     title: "Payment"
    //   }
    // },
    // PaymentGateway: {
    //   screen: PaymentGateway,
    //   navigationOptions: {
    //     title: "Pay"
    //   }
    // }
  }, {
  // initialRouteName: "Dfh",
  // initialRouteName: "DfhSummary",
}
  // {
  //   initialRouteName: "Home",
  //   navigationOptions: ({ navigation }) => ({
  //     headerTintColor: Colors.ember,
  //     headerRight: (
  //       <View style={{ flexDirection: "row" }}>
  //         <ReferralIcon/>
  //         <OffersIcon/>
  //       </View>
  //     ),
  //     headerTitleStyle: {
  //       ...Platform.select({
  //         ios: { fontFamily: "Arial",fontSize:14 },
  //         android: { fontFamily: "Roboto",fontSize:14 }
  //       })
  //     }
  //   })
  // }
);

export default HomeNavigator;
