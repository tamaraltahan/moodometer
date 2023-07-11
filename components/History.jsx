import { View, StyleSheet } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-reanimated-table";
import { useState } from "react";

const History = ({ data }) => {
  const { chartScores, chartDates, notes } = data;

  const [sortState, setSortState] = useState({ column: null, direction: "desc" });

  const handleSort = (column) => {
    let direction = "asc";
    if (sortState.column === column && sortState.direction === "asc") {
      direction = "desc";
    }
    setSortState({ column, direction });

    const sortedData = [...chartScores];
    sortedData.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    data.chartScores = sortedData;
  };

  const tableHead = ["Chart Scores", "Chart Dates", "Notes"];

  const tableData = chartScores.map((score, index) => [
    score,
    chartDates[index],
    notes[index],
  ]);

  return (
    <View styles={styles.container}>
      <TableWrapper>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={styles.text}
            onPress={(col) => handleSort(col)}
          />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </TableWrapper>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
