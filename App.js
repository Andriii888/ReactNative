// exp://192.168.0.111:19000
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  View,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";

const userInitialState = {
  login: "",
  email: "",
  password: "",
};
const fonts = {
  "RobotoMono-Bold": require("./assets/fonts/RobotoMono-Bold.ttf"),
  "RobotoMono-ExtraLight": require("./assets/fonts/RobotoMono-ExtraLight.ttf"),
  Inter_900Black,
  "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
};

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

export default function App() {
  const [logined, isLogined] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }
  // const [dimensions, setDimensions] = useState({
  //   window: windowDimensions,
  //   screen: screenDimensions,
  // });

  //   useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     'change',
  //     ({window, screen}) => {
  //       setDimensions({window, screen});
  //       console.log(window,screen)
  //     },
  //   );
  //   return () => subscription?.remove();
  // });

  const onHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={onHideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBg}
          source={require("./assets/BG.png")}
        >
          {!logined ? <RegistrationScreen /> : <LoginScreen />}

          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
