import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StepProgressBar = ({ step, totalSteps,textstyle }:any,) => {
  const progress = (step / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <Text style={[styles.text,textstyle]}>Step - {step}</Text>
      <View style={styles.progressBackground}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
  progressBackground: {
    height: 8,
    borderRadius: 10,
    backgroundColor: "#B5F4D5", // light green background
    overflow: "hidden",
    marginTop:6
  },
  progressFill: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#08D774", // solid green fill
  },
});

export default StepProgressBar;
