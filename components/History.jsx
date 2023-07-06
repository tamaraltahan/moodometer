import React, { useState } from "react";
import { db, auth } from "../config/Firebase";
import { query, getDocs, collection } from "firebase/firestore";
import { View, TouchableOpacity, Text } from "react-native";

const History = () => {
  const [entries, setEntries] = useState([]);

  const user = auth.currentUser;

  const getEntries = async () => {
    const q = query(collection(db, "Users", user.uid, "Entries"));
    try {
      const querySnapshot = await getDocs(q);
      const entriesData = [];
      querySnapshot.forEach((doc) => {
        entriesData.push(doc.data());
      });
      console.log(entriesData);
      setEntries(entriesData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={getEntries}>
        <Text>Press me!</Text>
      </TouchableOpacity>
      {entries.map((entry, index) => (
        <Text key={index}>{JSON.stringify(entry)}</Text>
      ))}
    </View>
  );
};

export default History;
