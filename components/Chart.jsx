import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MoodChart from "./MoodChart";
import Gauge from "./Gauge";

const Chart = ( {data} ) => {
  // console.log("chart: " + data)
  if (!data) {
    return <Text>Loading...</Text>;
  }

  const { chartScores, chartDates, averageScore } = data;

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
      <MoodChart scores={chartScores} dates={chartDates} />

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
    color: 'white',
  },
  titleText: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
    color: 'white',
  },
});

export default Chart;
