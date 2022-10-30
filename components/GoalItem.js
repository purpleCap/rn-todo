import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.todolist}>
        <Text>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todolist: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#bbb",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
