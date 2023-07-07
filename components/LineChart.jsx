import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Chart = ({ scores, dates }) => {
  return (
    <View>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: scores,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={550}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // Set the interval
        chartConfig={{
          propsForLabels: {
            fontFamily: "sans-serif",
            fontSize: "11px",
          },
          backgroundColor: "#1e1e1e",
          backgroundGradientFrom: "#424242",
          backgroundGradientTo: "#1e1e1e",
          decimalPlaces: 0, // Display whole numbers only
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#7F00FF",
          },
          propsForBackgroundLines: {
            strokeWidth: 0,
          },
          segments: 6, // Divide the y-axis into 6 segments
          yAxisInterval: 1,
          withInnerLines: true,
        }}
        bezier
        style={{
          marginVertical: 8,
        }}
      />
    </View>
  );
};

export default Chart;
