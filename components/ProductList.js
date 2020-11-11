import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const ProductList = ({component, data}) => (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={component}
        keyExtractor={(item, index) => item.index}
      />
    </View>
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15
  },
});

export default ProductList
