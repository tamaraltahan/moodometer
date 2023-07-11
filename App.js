import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Banner from "./components/Banner";
import Authenticator from "./components/Authenticator";
import { auth, db } from "./config/Firebase";
import { query, getDocs, collection } from "firebase/firestore";

export default function App() {
  const [logged, setLogged] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    const checkLoggedIn = () => {
      auth.onAuthStateChanged((user) => {
        setLogged(user != null);
      });
    };

    checkLoggedIn();
  }, []);

  useEffect(() => {
    const getEntries = async () => {
      if (logged) {
        const user = auth.currentUser;
        const q = query(collection(db, "Users", user.uid, "Entries"));
        try {
          const querySnapshot = await getDocs(q);
          const entriesData = [];
          querySnapshot.forEach((doc) => {
            entriesData.push(doc.data());
          });

          const convertedEntries = entriesData.map((entry) => {
            const datetime = new Date(entry.datetime.seconds * 1000);
            const localDatetime = datetime.toLocaleString();
            return {
              ...entry,
              datetime: localDatetime,
            };
          });

          convertedEntries.sort((a, b) => {
            return new Date(a.datetime) - new Date(b.datetime);
          });

          const chartDates = convertedEntries.map((entry) => entry.datetime);
          const chartScores = convertedEntries.map((entry) => entry.value);
          const averageScore = getAverageScore(
            convertedEntries.map((entry) => entry.value)
          );
          const notes = convertedEntries.map((entry) => entry.note);

          setChartData({
            chartScores,
            chartDates,
            averageScore,
            notes,
          });
          setLoading(false); // Update the loading state
        } catch (err) {
          console.error(err);
        }
      }
    };

    getEntries();
  }, [logged]);

  const getAverageScore = (scores) => {
    const sum = scores.reduce((a, b) => a + b, 0);
    return (sum / scores.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      {logged ? (
        <View>
          {loading ? (
            <Text>Loading...</Text> // Placeholder or loading state
          ) : (
            <Banner chartData={chartData} />
          )}
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
