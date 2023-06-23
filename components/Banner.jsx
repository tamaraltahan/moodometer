import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Banner = () => {
  const [activeTab, setActiveTab] = useState("New Entry");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    // Implement logic to render the component based on the pressed tab
    // For example, you can use conditional rendering or navigation libraries like React Navigation
  };

  return (
    <View style={{ flexDirection: "row", backgroundColor: "#f1f1f1" }}>
      <TouchableOpacity
        style={{
          flex: 1,
          paddingVertical: 10,
          alignItems: "center",
          backgroundColor: "grey",
        }}
        onPress={() => handleTabPress("New Entry")}
      >
        <Text
          style={{
            color: activeTab === "New Entry" ? "#000" : "#fff",
            fontWeight: activeTab === "New Entry" ? "bold" : "normal",
          }}
        >
          New Entry
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          paddingVertical: 10,
          alignItems: "center",
          backgroundColor: "grey",
        }}
        onPress={() => handleTabPress("History")}
      >
        <Text
          style={{
            color: activeTab === "History" ? "#000" : "#fff",
            fontWeight: activeTab === "History" ? "bold" : "normal",
          }}
        >
          History
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          paddingVertical: 10,
          alignItems: "center",
          backgroundColor: "grey",
        }}
        onPress={() => handleTabPress("Notes")}
      >
        <Text
          style={{
            color: activeTab === "Notes" ? "#000" : "#fff",
            fontWeight: activeTab === "Notes" ? "bold" : "normal",
          }}
        >
          Notes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Banner;
