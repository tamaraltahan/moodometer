// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Entry from "./components/Entry";
import Banner from "./components/Banner";
import Authenticator from "./components/Authenticator"

export default function App() {
  return (
    <View style={styles.container}>
      <Banner />
      <Authenticator />
      <View style={styles.contentContainer}>
        <Entry />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
