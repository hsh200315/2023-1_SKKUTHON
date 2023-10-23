/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MainPage from './app/screens/Main/mainPage';
import InputMenu from './app/screens/Main/InputMenu';
import ReInputMenu from './app/screens/Main/ReInputMenu';
import SelectOrder from './app/screens/Main/SelectOrder';
import Category from './app/screens/Main/category';
import ShowStore from './app/screens/Main/ShowStore';
import Loading from './app/screens/loading';
import Location from './app/screens/Main/location';
import myInfo from './app/screens/Main/myInfo';
import ShowStoreFromCategory from './app/screens/Main/ShowStoreFromCategory';
import SelectOrderFromCategory from './app/screens/Main/SelectOrderFromCategory';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InputMenu"
            component={InputMenu}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ReInputMenu"
            component={ReInputMenu}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SelectOrder"
            component={SelectOrder}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Location"
            component={Location}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="myInfo"
            component={myInfo}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ShowStoreFromCategory"
            component={ShowStoreFromCategory}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SelectOrderFromCategory"
            component={SelectOrderFromCategory}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
