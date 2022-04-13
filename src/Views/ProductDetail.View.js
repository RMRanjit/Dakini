import React, { useContext } from "react";
import { Text } from "react-native";
//import styled from "styled-components/native";
import { ProductDetailCard } from "../components/products/components/ProductDetail.Component";

export const ProductDetailView = ({ route }) => {
  const { product } = route.params;
  return <ProductDetailCard product={product} />;
};
