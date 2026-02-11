import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import CreateRequestScreen from '../screens/CreateRequestScreen';
import AIDiagnosticScreen from '../screens/AIDiagnosticScreen';
import QuotesScreen from '../screens/QuotesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import PaymentScreen from '../screens/PaymentScreen';
import RatingScreen from '../screens/RatingScreen';

// Define navigation param types (TypeScript best practice)
export type RootStackParamList = {
  Home: undefined;
  CreateRequest: { category: string };
  AIDiagnostic: undefined;
  Quotes: undefined;
  Schedule: undefined;
  Payment: undefined;
  Rating: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0F766E',
          },
          headerTintColor: '#FFFFFF',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Services (Casablanca)' }}
        />

        <Stack.Screen
          name="CreateRequest"
          component={CreateRequestScreen}
          options={{ title: 'Create Request' }}
        />

        <Stack.Screen
          name="AIDiagnostic"
          component={AIDiagnosticScreen}
          options={{ title: 'AI Diagnostic' }}
        />

        <Stack.Screen
          name="Quotes"
          component={QuotesScreen}
          options={{ title: 'Compare Quotes' }}
        />

        <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ title: 'Schedule Visit' }}
        />

        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ title: 'Payment Confirmation' }}
        />

        <Stack.Screen
          name="Rating"
          component={RatingScreen}
          options={{ title: 'Rate the Service' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
