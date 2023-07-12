import { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Table, TableWrapper, Row, Rows } from "react-native-reanimated-table";

const History = ({ data }) => {
  const { chartScores, chartDates, notes } = data;

  const [sortState, setSortState] = useState({
    column: "Date",
    direction: "desc",
  });
  const [tableData, setTableData] = useState(
    chartScores.map((score, index) => [score, chartDates[index], notes[index]])
  );

  useEffect(() => {
    const sortedData = chartScores.map((score, index) => ({
      score,
      date: chartDates[index],
      note: notes[index],
    }));
  
    if (sortState.column === "Score") {
      sortedData.sort((a, b) =>
        sortState.direction === "asc" ? a.score - b.score : b.score - a.score
      );
    } else if (sortState.column === "Date") {
      sortedData.sort((a, b) =>
        sortState.direction === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortState.column === "Note") {
      sortedData.sort((a, b) =>
        sortState.direction === "asc"
          ? a.note.localeCompare(b.note)
          : b.note.localeCompare(a.note)
      );
    }
  
    setTableData(sortedData.map((item) => [item.score, item.date, item.note]));
  }, [data, sortState]);
  

  const handleSort = (column) => {
    let direction = "asc";
    if (sortState.column === column && sortState.direction === "asc") {
      direction = "desc";
    }
    setSortState({ column, direction });
  };

  const tableHead = ["Score", "Date", "Note"].map((head, index) => (
    <TouchableOpacity
      onPress={() => handleSort(head)}
      key={index}
      style={styles.headerText} // Use the new style here
    >
      <Text>{head}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <Table>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
          onPress={(col) => handleSort(col)}
        />
        <TableWrapper>
          <Rows data={tableData} textStyle={styles.text} />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: "#282c34"
  },
  head: { 
    height: 40, 
    backgroundColor: "#44475a", 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: "#f8f8f2"
  },
  text: { 
    margin: 6, 
    padding: 10, 
    color: "#f8f8f2"
  },
  headerText: { // New style for header text
    margin: 6,
    padding: 10,
    color: "#50fa7b", // Bright color for contrast
    fontWeight: "bold", // Bold font weight
    fontSize: 16, // Larger font size
  },
});

