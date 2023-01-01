import { store } from './store'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapScreen from './screens/MapScreen'
import ChatScreen from './screens/ChatScreen'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={ HomeScreen } options={{ headerShown:false }}/>
            <Stack.Screen name="MapScreen" component={ MapScreen } options={{ headerShown:false }}/>
            <Stack.Screen name="ChatScreen" component={ ChatScreen } options={{ headerShown:false }}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
