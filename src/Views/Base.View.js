import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ProductsContextProvider } from "../Services/Product/product.context";
import { ProductView } from "./Products.View";
import { SettingsView } from "./Settings.View";
import { TryOnView } from "./TryOn.View";
import { Navigation } from "../Common/Navigation";

const Tab = createMaterialBottomTabNavigator();

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const Listing = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const BaseView = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <Navigation />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: { flex: 1, padding: 16 },
});
