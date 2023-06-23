import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../config/Firebase";

const Authenticator = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
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
      {auth ? (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              signInWithGoogle();
            }}
          >
            <Image
              style={styles.image}
              source={require("../assets/google_signin_buttons/web/2x/btn_google_signin_dark_focus_web@2x.png")}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity>
          <Image
            source={auth?.currentuser?.photoURL}
            onPress={() => logout()}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Authenticator;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: "auto",
  },
  image: {
    width: 191,
    height: 46,
  },
});
