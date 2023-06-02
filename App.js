<script src="http://192.168.15.72:8097"></script>;

import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.app}
    >
      <ImageBackground
        source={require("./assets/images/tim-head.png")}
        resizeMode="cover"
        style={styles.app}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.app}>{screen}</SafeAreaView>
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
