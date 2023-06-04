import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";

const Entry = () => {
  const [score, setScore] = useState(0);
  const [textEntry, setTextEntry] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState(null);

  const emojis = [
    { emoji: "😁", value: 2 },
    { emoji: "🙂", value: 1 },
    { emoji: "😐", value: 0 },
    { emoji: "☹️", value: -1 },
    { emoji: "😭", value: -2 },
    { emoji: "💀", value: -3 },
  ];

  useEffect(() => {
    setWordCount(textEntry.trim().split(" ").filter(Boolean).length);
  }, [textEntry]);

  const handleChange = (value) => {
    setTextEntry(value);
    setWordCount(value.trim().split(" ").length);
  };

  const handleEmojiPress = (value, index) => {
    setScore(value);
    setSelectedEmojiIndex(index);
  };

  const handleSubmit = () => {
    console.log("Button pressed!");
  };

  return (
    <View>
      <View style={styles.container}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleEmojiPress(emoji.value, index)}
            style={[
              styles.emojiContainer,
              selectedEmojiIndex === index && styles.selectedEmojiContainer,
            ]}
          >
            <Text
              style={[
                styles.emoji,
                selectedEmojiIndex === index && styles.selectedEmoji,
              ]}
            >
              {emoji.emoji}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Text style={styles.tag}>optional</Text>
        <TextInput
          editable={true}
          multiline={true}
          onChangeText={handleChange}
          value={textEntry}
          style={styles.input}
          placeholder="Log your thoughts"
        />
        <Text style={styles.wordCount}>Word Count: {wordCount}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleSubmit}
          title="Submit"
          disabled={selectedEmojiIndex === null}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 5,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 60,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 50,
    borderRadius: 25,
  },
  emojiContainer: {
    marginRight: 25,
  },
  selectedEmojiContainer: {
    backgroundColor: "lightblue",
    borderRadius: 20,
  },
  emoji: {
    fontSize: 35,
  },
  selectedEmoji: {
    color: "white",
  },
  buttonContainer: {
    marginVertical: 50,
    alignSelf: "center",
    width: 250,
  },
  input: {
    height: 250,
    margin: 5,
    borderWidth: 5,
    borderColor: "white",
    padding: 2,
    borderRadius: 20,
    paddingTop: 15,
    paddingLeft: 10,
  },
  tag: {
    fontSize: 12,
    color: "grey",
    paddingLeft: 20,
  },
  wordCount: {
    fontSize: 12,
    paddingLeft: 20,
  },
});

export default Entry;
