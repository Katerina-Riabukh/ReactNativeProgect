import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <Text>Увійти</Text>
      <TextInput />
      <TextInput />
      <Button title="Увійти" />
      <Button title="Немає акаунту? Зареєструватися" />
    </View>
  );
}
