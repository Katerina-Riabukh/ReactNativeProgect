import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const logIn = () => {
    console.debug("Welcome");
  };
  const switchtoRegistration = () => {
    navigation.navigate("Registration");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/Photo BG.png")}
          style={styles.background}
        >
          <KeyboardAvoidingView
            style={styles.keyBordContainer}
            behavior="padding"
          >
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                autoComplete="email"
                onChangeText={setEmail}
                value={email}
              />
              <View style={styles.showWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  autoComplete="password"
                  onChangeText={setPassword}
                  value={password}
                />
                <TouchableOpacity style={styles.showPasswordBtn}>
                  <Text style={styles.showPasswordText}>Показати</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.BtnWraper}>
            <TouchableOpacity style={styles.loginButton} onPress={logIn}>
              <Text style={styles.registrationButtonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registrationLink}
              onPress={switchtoRegistration}
            >
              <Text>Немає акаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  keyBordContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    minWidth: 375,
    minHeight: 489,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 32,
  },
  avatar: {
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 32,
    width: 120,
    height: 120,
    aspectRatio: 1,
    marginTop: "-25%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  avatarImage: {
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  addButton: {
    position: "absolute",
    width: 25,
    height: 25,
    right: -10,
    bottom: 15,
  },
  addButtonIcon: {
    width: 25,
    height: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 32,
  },
  form: {
    position: "relative",
  },
  input: {
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    color: "#000",
  },
  showWrapper: {
    position: "relative",
  },
  showPasswordBtn: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showPasswordText: {
    fontSize: 16,
    color: "#1B4371",
  },
  BtnWraper: {
    position: "absolute",
    width: "100%",
    bottom: 45,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 43,
  },
  loginButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    padding: 16,
    marginTop: 43,
  },
  registrationButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  registrationLink: {
    textAlign: "center",
    fontSize: 16,
    color: "#1B4371",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
  },
  background: {
    minWidth: 375,
    minHeight: 812,
  },
});
