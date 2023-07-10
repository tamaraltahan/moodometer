import React, { useState, useEffect } from "react";
import { db, auth } from "../config/Firebase";
import { query, getDocs, collection } from "firebase/firestore";
import { View, Text, StyleSheet } from "react-native";
import Chart from "./LineChart";
import Gauge from "./Gauge";

const History = () => {
  const [chartScores, setChartScores] = useState([]);
  const [chartDates, setChartDates] = useState([]);
  const [averageScore, setAverageScore] = useState(null);

  const user = auth.currentUser;

  useEffect(() => {
    const getEntries = async () => {
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

        convertedEntries.sort(
          (a, b) => new Date(a.datetime) - new Date(b.datetime)
        );

        setChartDates(convertedEntries.map((entry) => entry.datetime));
        setChartScores(convertedEntries.map((entry) => entry.value));

        const average = getAverageScore(
          convertedEntries.map((entry) => entry.value)
        );
        setAverageScore(average);
      } catch (err) {
        console.error(err);
      }
    };

    getEntries();
  }, [user.uid]);

  const getAverageScore = (scores) => {
    const sum = scores.reduce((a, b) => a + b, 0);
    return (sum / scores.length).toFixed(2);
  };

  const getEmoji = (val) => {
    if (val > 1) {
      return "😁";
    } else if (val > 0 && val < 1) {
      return "🙂";
    } else if (val > -1 && val < 0) {
      return "😐";
    } else if (val > -2 && val < -1) {
      return "☹️";
    } else if (val > -3 && val < -2) {
      return "😭";
    } else {
      return "💀";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Mood over time</Text>
      <Chart scores={chartScores} dates={chartDates} />

      {averageScore !== null ? (
        <View
          style={{
            width: 750,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
          }}
        >
          <Gauge value={averageScore} />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Average Mood is: {averageScore} {getEmoji(averageScore)}
        </Text>
        <Text style={styles.text}>
          Number of Entries is: {chartScores.length}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },
});

export default History;
