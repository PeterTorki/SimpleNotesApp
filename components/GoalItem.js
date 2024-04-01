import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ title, id, onDeleteGoal }) {
  function deleteGoalHandler() {
    onDeleteGoal(id);
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalHandler}
        android_ripple={{
          color: "#210644",
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
