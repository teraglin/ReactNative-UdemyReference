<script src="http://192.168.15.72:8097"></script>;

import { StyleSheet, View } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.app}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "orange",
  },
});
