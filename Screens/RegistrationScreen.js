import {
  StyleSheet,
  Button,
  Image,
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

export default function RegistrationScreen({ navigation }) {
  const switchtoLogin = () => {
    navigation.navigate("Login");
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
            // behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.avatar}>
              <Image
                source={require("../avatar/butterfly-2.jpg")}
                style={styles.avatarImage}
              />
              <TouchableOpacity style={styles.addButton}>
                <Image
                  style={styles.addButtonIcon}
                  source={require("../images/add.png")}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <TextInput style={styles.input} placeholder="Логін" />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
              />
              <View style={styles.showWrapper}>
                <TextInput style={styles.input} placeholder="Пароль" />
                <TouchableOpacity style={styles.showPasswordBtn}>
                  <Text style={styles.showPasswordText}>Показати</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.BtnWraper}>
            <Pressable style={styles.registrationButton}>
              <Text style={styles.registrationButtonText}>Зареєстуватися</Text>
            </Pressable>

            <TouchableOpacity
              style={styles.registrationLink}
              onPress={switchtoLogin}
            >
              <Text>Вже є акаунт? Увійти</Text>
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
    minHeight: 549,
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
    // fontFamily: "Roboto-Medium",
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
    // fontFamily: "Roboto-Regular",
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
  registrationButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    padding: 16,
    marginTop: 27,
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
