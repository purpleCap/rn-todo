import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (newGoal) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: newGoal },
    ]);
    setIsAddMode(false);
  };

  const filterOut = (itemId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== itemId));
  };

  const cancelAddGoal = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelAddGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={() => filterOut(itemData.item.id)}
            goal={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
