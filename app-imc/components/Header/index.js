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

    alignItems: "center",
    marginTop: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
