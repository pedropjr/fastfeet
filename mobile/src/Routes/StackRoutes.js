import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Details';
import NewProblem from '~/pages/NewProblem';
import ViewProblems from '~/pages/ViewProblems';
import ConfirmDelivery from '~/pages/ConfirmDelivery';

export default function StackRoutes() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7159c1',
          elevation: 0,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={Dashboard}
      />

      <Stack.Screen
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
        name="Details"
        options={{ title: 'Detalhes da encomenda' }}
        component={Details}
      />

      <Stack.Screen
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
        name="NewProblem"
        options={{ title: 'Informar problema' }}
        component={NewProblem}
      />

      <Stack.Screen
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
        name="ViewProblems"
        options={{ title: 'Visualizar problemas' }}
        component={ViewProblems}
      />

      <Stack.Screen
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
        name="ConfirmDelivery"
        options={{ title: 'Confirmar entrega' }}
        component={ConfirmDelivery}
      />
    </Stack.Navigator>
  );
}
