import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CartButton from "../components/CartButton";
import CartOverview from "../screens/CartOverview"
import ProductOverview from "../screens/ProductOverview";

export default function ShopNavigator({navigation}) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProductOverview}
        name="Product Overview"
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CartButton}>
              <Item
                title="hamburger"
                iconName="ios-cart"
                onPress={() => {
                  navigation.navigate("Cart")
                }}
                style={{ marginLeft: 10 }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen component={CartOverview} name="Cart" />
    </Stack.Navigator>
  );
}
