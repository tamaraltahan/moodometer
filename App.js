// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Entry from "./components/Entry";
import Banner from "./components/Banner";
import Authenticator from "./components/Authenticator";
import { useState, useEffect } from "react";
// import { ToastProvider } from 'react-native-toast-notifications'

// import firebase from "firebase/app";
import { auth } from "./config/Firebase";

export default function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const checkLoggedIn = () => {
      auth.onAuthStateChanged((user) => {
        setLogged(user != null);
      });
    };

    checkLoggedIn();
  }, []);

  return (
      <View style={styles.container}>
        {logged ? (
          <View>
            <Banner />
            <Authenticator />
            <View style={styles.contentContainer}>
              <Entry />
            </View>
          </View>
        ) : (
          <View>
            <Authenticator />
          </View>
        )}
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
