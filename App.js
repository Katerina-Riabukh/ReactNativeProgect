import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    InterVariable: require("./assets/fonts/InterVariable.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Login" style={styles.container}>
  //       <Stack.Screen
  //         name="Registration"
  //         component={RegistrationScreen}
  //         options={{ title: "Registration" }}
  //       />
  //       <Stack.Screen
  //         name="Login"
  //         component={LoginScreen}
  //         options={{ title: "Login" }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/Photo BG.png")}
        style={styles.background}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" style={styles.container}>
            <Stack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
  },
  background: {
    minWidth: 375,
    minHeight: 812,
  },
});
