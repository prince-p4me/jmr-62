import { createStackNavigator } from 'react-navigation-stack';;
import ProductDetail from "../Product/ProductDetail.container";
import SelectOption from "../Product/SelectOption.container";
import SetPreferenceText from "../Product/SetPreferenceText.container";
import MultiSelect from "../Product/MultiSelect.container";
import { Colors } from "../Themes";

const ProductModalNavigator = createStackNavigator(
  {
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: {
        title: "Product"
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
    }
  },
  {
    initialRouteName: "ProductDetail",
    mode: "modal",
    headerMode: "none"
  }
);

export default ProductModalNavigator;
