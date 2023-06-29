import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { signInWithPopup, signOut } from "firebase/auth";
import { googleProvider, db, auth } from "../config/Firebase";

const Authenticator = ({ onLogin }) => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onLogin();
      const currentUser = auth.currentUser;
      if (currentUser) {
        const googleUserId = currentUser.uid;
        const email = currentUser.email;

        // Check if the user already exists
        const userRef = db.collection("Users").doc(googleUserId);
        const userSnapshot = await userRef.get();

        if (userSnapshot.exists) {
          // User already exists, no need to create a new collection
          console.log("User already exists");
        } else {
          // User does not exist, create a new collection with a unique ID
          const userCollectionRef = db
            .collection("Users")
            .doc(googleUserId)
            .collection();
          await userCollectionRef.doc("Profile").set({
            email,
          });
          console.log("User collection created");
        }
      }
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
          <TouchableOpacity onPress={() => logout()}>
            <Image
              referrerpolicy="no-referrer"
              style={styles.profilePic}
              source={{ uri: auth?.currentUser?.photoURL }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logout()}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.containerCenter}>
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
    alignItems: "flex-end",
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
