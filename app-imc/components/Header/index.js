import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Programa Saúde 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3498db",
    padding: 15,
    width: 450,
    alignItems: "center",
    marginTop: 45,
    borderWidth: 2,
    borderColor: "#033B86",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#033B86",
  },
});
