/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Root } from "native-base";
import { Provider } from "react-redux";
import store, { persistor } from "./Store/";
import AppNavigator from "./View/Navigation";
import { PersistGate } from "redux-persist/lib/integration/react";
import LoadingIndicator from "./View/Components/LoadingIndicator";
import { SafeAreaView, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount = () => {
    SplashScreen.hide();
  }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={<LoadingIndicator />} persistor={persistor}>
            <SafeAreaView style={{ flex: 1 }}>
              <AppNavigator />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
