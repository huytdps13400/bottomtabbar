import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import BottomTab from './BottomTabNavigation';
import {navigationRef} from './RootNavigation';
import {routes} from './routes';
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.BOTTOMTAB} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
