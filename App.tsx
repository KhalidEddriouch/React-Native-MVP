import React from 'react';
import { RequestProvider } from './src/context/RequestContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <RequestProvider>
      <AppNavigator />
    </RequestProvider>
  );
}
