import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const sendEnteredGoalAndReset = (newGoal) => {
    props.onAddGoal(newGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title="ADD"
              color="green"
              onPress={() => sendEnteredGoalAndReset(enteredGoal)}
            />
          </View>

          <View style={styles.btn}>
            <Button
              style={styles.btn}
              title="CANCLE"
              color="red"
              onPress={() => props.onCancel()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
