/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import Profile from '~/pages/Profile';
import StackRoutes from './StackRoutes';

export default function createRouter(signed) {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return !signed ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        keyboardHidesTabBar: true,
        inactiveTintColor: '#999',
        labelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={StackRoutes}
        options={{
          title: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
