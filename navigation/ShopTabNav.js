import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShopStackNav from "./ShopStackNav";

export default function ShopTabNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        component={ShopStackNav}
        name="Shop Stack"
      />
    </Tab.Navigator>
  );
}
