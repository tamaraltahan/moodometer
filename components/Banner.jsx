import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Entry from "./Entry";
import Chart from "./Chart";
import Authenticator from "./Authenticator";

const Banner = () => {
  const [activeTab, setActiveTab] = useState("New Entry");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const renderSelectedComponent = () => {
    if (activeTab === "New Entry") {
      return <Entry />;
    } else if (activeTab === "Chart") {
      return <Chart />;
    } else {
      return (
        <View>
          {/* <Text>⚠️Under Construction⚠️</Text> */}
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f1f1f1",
          marginTop: 0, // Add margin-top here
        }}
      >
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
          onPress={() => handleTabPress("Chart")}
        >
          <Text
            style={{
              color: activeTab === "Chart" ? "#000" : "#fff",
              fontWeight: activeTab === "Chart" ? "bold" : "normal",
            }}
          >
            Chart
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
      </View>
      <Authenticator />
      <View style={{ flex: 1, marginTop: 50 }}>
        {renderSelectedComponent()}
      </View>
    </View>
  );
};

export default Banner;
