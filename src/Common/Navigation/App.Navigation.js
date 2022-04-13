import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ProductsContextProvider } from "../../Services/Product/product.context";
//import { ProductView } from "../../Views/Products.View";
import { SettingsView } from "../../Views/Settings.View";
import { TryOnView } from "../../Views/TryOn.View";
import { ProductNavigator } from "./Product.Navigation";

const Tab = createMaterialBottomTabNavigator();

export const AppNavigator = () => (
  <ProductsContextProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
        //screenOptions={createScreenOptions}
        // tabBarOptions={{
        //   activeTintColor: "tomato",
        //   inactiveTintColor: "gray",
        // }}
      >
        <Tab.Screen
          name="Home"
          component={ProductNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Try On"
          component={TryOnView}
          options={{
            tabBarLabel: "Try On",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="camera-enhance-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsView}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-settings-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </ProductsContextProvider>
);
