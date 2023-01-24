import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Food from "./screens/Food";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Food" component={Food} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
