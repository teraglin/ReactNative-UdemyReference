<script src="http://192.168.15.72:8097"></script>;

import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.app}
    >
      <ImageBackground
        source={require("./assets/images/tim-head.png")}
        resizeMode="cover"
        style={styles.app}
        imageStyle={styles.imageBackground}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.25,
  },
});
