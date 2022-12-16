import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <StackNavigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Register',
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </StackNavigator>
  );
};

export default StackNavigator;
