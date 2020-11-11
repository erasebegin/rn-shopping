import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

export default function ProductCard({ data }) {
  const { title, description, price, image } = data.item;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>{price}</Text>
        <Button title="cart"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    shadowColor: "gray",
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.1,
    elevation: 2,
    borderRadius: 1,
    width: "100%"
  },
  image: {
    height: 100,
    width: "100%",
    marginBottom: 10
  },
  title: {
    fontFamily: "montserrat-bold",
    fontSize: 20,
    marginVertical: 5
  },
  price: {
    fontFamily: "montserrat"
  },
  footer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
