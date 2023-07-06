import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Banner from "./components/Banner";
import Authenticator from "./components/Authenticator";
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
});
