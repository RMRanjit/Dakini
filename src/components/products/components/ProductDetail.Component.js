import React from "react";
import { StyleSheet } from "react-native";
//import { styles } from "./ProductCard.styles";
import { Card, Text } from "react-native-paper";

import {
  //ProductCard,
  Title,
} from "./ProductCard.styles";

export const ProductDetailCard = ({ product = {} }) => {
  const {
    id = "0",
    name = "Product Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://via.placeholder.com/500"],
    price = "$100",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus mi eget bibendum facilisis. In interdum felis eget est bibendum.",
    rating = 4,
    isOutofSctock = false,
  } = product;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={id}
        style={styles.cover}
        source={{ uri: photos[0] }}
      ></Card.Cover>
      <Title> Name: {name}</Title>
      <Title> Description: {description}</Title>
      <Title> Price: {price}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightblue",
    marginBottom: 10,
  },
  cover: {
    padding: 20,
    backgroundColor: "lightgray",
  },
  title: { padding: 16 },
});
