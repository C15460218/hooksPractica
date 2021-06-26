import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UseReducerScreen from './screens/MainScreen';

const Stack = createStackNavigator();

const App = function(){
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={UseReducerScreen} />
    </Stack.Navigator>
  </NavigationContainer> 
  );
}

export default App;