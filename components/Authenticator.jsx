import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../config/Firebase";

const Authenticator = ({ onLogin }) => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onLogin();
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      {auth.currentUser ? (
        <View style={styles.containerRight}>
          {/* Render the logged-in segment */}
          <TouchableOpacity onPress={() => logout()}>
            <Image
              style={styles.profilePic}
              source={{ uri: auth.currentUser?.photoURL }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logout()}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.containerCenter}>
          {/* Render the logged-out segment */}
          <Text style={styles.text}>Please sign in to get started</Text>
          <TouchableOpacity onPress={() => signInWithGoogle()}>
            <Image
              style={styles.image}
              source={require("../assets/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png")}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Authenticator;

const styles = StyleSheet.create({
  containerCenter: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
  },
  containerRight: {
    justifyContent: "center",
    alignItems: "flex-end", // Align items to the right
    marginTop: 50,
    marginRight: 25,
  },
  image: {
    width: 191,
    height: 46,
  },
  text: {
    fontSize: 20,
    color: "white",
    marginBottom: "1rem",
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  logoutContainer: {
    flexDirection: "row", // Arrange items horizontally
    alignItems: "center", // Align items vertically
  },
  logoutText: {
    fontSize: 16,
    color: "blue",
    marginLeft: 5, // Add some spacing between the button and text
    textAlign: "center",
  },
});
