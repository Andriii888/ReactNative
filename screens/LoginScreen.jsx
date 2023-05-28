import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  // Button,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const userInitialState = {
  email: "",
  password: "",
};
const fonts = {
  "RobotoMono-Bold": require("../assets/fonts/RobotoMono-Bold.ttf"),
  "RobotoMono-ExtraLight": require("../assets/fonts/RobotoMono-ExtraLight.ttf"),
  Inter_900Black,
  "RobotoMono-Regular": require("../assets/fonts/RobotoMono-Regular.ttf"),
};

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [userLoginState, setUserLoginState] = useState(userInitialState);
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }
  const onFocus = () => {
    setIsShowKeyboard(true);
  };

  const onSubmitBtn = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(userLoginState);
    setUserLoginState(userInitialState);
  };
  return (
    <View
      style={{
        ...styles.formContainer,
        paddingBottom: isShowKeyboard ? 0 : 55,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          {/* <View style={styles.inputBox}>
            <TextInput
              onChangeText={(value) =>
                setUserLoginState((prevState) => ({
                  ...prevState,
                  login: value,
                }))
              }
              value={userLoginState.login}
              style={styles.input}
              placeholder="Login"
              onFocus={onFocus}
            ></TextInput>
          </View> */}
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={(value) =>
                setUserLoginState((prevState) => ({
                  ...prevState,
                  email: value,
                }))
              }
              value={userLoginState.email}
              style={styles.input}
              placeholder="Email"
              onFocus={onFocus}
              n
            ></TextInput>
          </View>
          <View style={{ color: "#f0f8ff", marginBottom: 40, fontSize: 18 }}>
            <TextInput
              onChangeText={(value) =>
                setUserLoginState((prevState) => ({
                  ...prevState,
                  password: value,
                }))
              }
              value={userLoginState.password}
              style={styles.input}
              placeholder="Password"
              onFocus={onFocus}
              // secureTextEntry={true}
            ></TextInput>
          </View>
          <TouchableOpacity
            activeOpacity={0.75}
            style={styles.buttonContainer}
            onPress={onSubmitBtn}
          >
            <Text style={styles.titleBtn}>Login</Text>
          </TouchableOpacity>
          {/* <Button title="Register"  onPress={() => Alert.alert(' pressed button ')} color="#FF6C00"  style={styles.formButton}/> */}
          <Text
            style={{
              fontFamily: "Inter_900Black",
              textAlign: "center",
              marginTop: 15,
            }}
          >
            Already have an account? Sign in
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "RobotoMono-ExtraLight",
  },
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // paddingBottom: 55,
  },
  title: {
    marginTop: 90,
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "RobotoMono-Bold",
    // fontStyle: normal,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
  },
  form: {
    marginHorizontal: 40,
    // backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  inputBox: {
    marginBottom: 15,
  },
  inputTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
  },
  buttonContainer: {
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    color: "#FFFFFF",
    height: 50,
  },
  titleBtn: {
    textAlign: "center",
    // font-family: 'Roboto',
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
});
