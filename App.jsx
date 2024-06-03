import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import AuthProvider from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StackNavigation />
    </AuthProvider>
  );
};

export default App;
