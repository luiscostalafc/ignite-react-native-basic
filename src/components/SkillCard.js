import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SkillCard = ({ skill }) => (
  <TouchableOpacity style={styles.buttonSkill}>
    <Text style={styles.textSkill}>{skill}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1325",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export { SkillCard };
