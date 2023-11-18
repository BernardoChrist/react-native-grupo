import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          source={require("../../../assets/serrafylogo.png")}
          style={{ width: 125, height: 125 }}
        />
      </View>
      <View>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#004AAD",
    alignItems: "center",
    width: "100%",
  },
  viewImage: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    backgroundColor: "#FFFDFD",
  },

  titulo: {
    color: "#FFFDFD",
    fontSize: 28,
    marginTop: 10,
    marginBottom: 30,
    fontWeight: "bold",
  },
});
