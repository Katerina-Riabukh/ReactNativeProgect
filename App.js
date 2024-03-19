import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/Photo BG.png")}
        style={styles.background}
      >
        {/* <RegistrationScreen /> */}
        <LoginScreen />
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
