import React from 'react';
import Home from './src/screens/Home';
import PesquisaProduto from './src/screens/PesquisaProduto';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/screens/Profile';
import EditarProduto from './src/screens/EditarProduto';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
        <Stack.Screen name='PesquisaProduto' component={PesquisaProduto} options={{headerShown: false}} />
        <Stack.Screen name='EditarProduto' component={EditarProduto} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
