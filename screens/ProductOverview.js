import React from "react";
import { View, StyleSheet } from "react-native";
import {useSelector} from "react-redux";

import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";

export default function ProductOverview() {
  const productList = useSelector(state => state.products.products)
  const ProductDisplay = (itemData) => <ProductCard data={itemData} />;
  return (
    <View style={styles.container}>
      <ProductList component={ProductDisplay} data={productList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
