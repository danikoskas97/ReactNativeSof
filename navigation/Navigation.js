import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import ItemScreen from "../screens/ItemScreen";
import CartScreen from "../screens/CartScreen";
import ListCategoryScreen from "../screens/ListCategoryScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const Navigation = createStackNavigator(
  {
    Home: HomeScreen,
    ListItemCategory: {
      screen: ListCategoryScreen,
    },
    ItemScreen: ItemScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: {
        backgroundColor: Platform.OS === "android" ? "white" : Colors.primary,
      },
    },
  }
);

const CartTabNavigator = createBottomTabNavigator({
  Shop: Navigation,
  // add another tab:
  Cart: CartScreen,
});

export default createAppContainer(CartTabNavigator);
