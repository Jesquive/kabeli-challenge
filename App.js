import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import {  DarkTheme, NavigationContainer } from "@react-navigation/native";
import EditItemScreen from "./screens/EditItemScreen";
import CreateItemScreen from "./screens/CreateItemScreen";
import { View } from "react-native";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {

  return (
    <View className="bg-black flex-1">
      <NavigationContainer theme={DarkTheme} >
        <Stack.Navigator initialRouteName="Home"
        animationEnabled={false}
        screenOptions={{
          headerMode: 'float',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#ea580c' },
        }} 
        >
          <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'ToDo List',
            
          }} 
          />
          <Stack.Screen name="EditItem" component={EditItemScreen}           
          options={{
            title: 'Editar',
            mode: "modal",
            transparentCard: true
          }} 
          />
          <Stack.Screen name="CreateItem" component={CreateItemScreen}            
          options={{
            title: 'Crear',
          }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
}

