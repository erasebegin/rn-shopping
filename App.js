import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import {Provider} from "react-redux";

import productReducer from "./store/reducers/productReducers";
import ShopTabNav from "./navigation/ShopTabNav";

enableScreens();


const rootReducer = combineReducers({
  products: productReducer
})

const store = createStore(rootReducer)

const loadFonts = () => {
  return Font.loadAsync({
    montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopTabNav />
      </NavigationContainer>
    </Provider>
  );
}
